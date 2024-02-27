import { Typography, useTheme } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

import {
  StyledCell,
  StyledHeaderCell,
  StyledNoData,
  StyledTableWrapper,
} from "Shared/DataTable/BlDataTableStyles";
import { TableSkeleton } from "Shared/DataTable/TableSkeleton";
import { usePrevious } from "Infrastructure/Hooks/usePrevious";
import * as React from "react";
import { useEffect } from "react";
import { Resources, useResource } from "Infrastructure/Translations/Resources";
import { isNoU } from "Infrastructure/Utils/ObjectUtils";

type Props<T> = {
  rows: {
    data: T;
  }[];
  rowEntityID: keyof T;
  getCell: (id: TableIDType<T>, data: T) => JSX.Element;
  columns: Column<T>[];
  getHeaderCell?: (column: Column<T>) => JSX.Element;
  getBorderColor?: (data: T) => string;
  onPageChange?: (page: number, rows: number) => void;
  resetTablePage?: boolean | null;
  totalCount?: number;
  isLoading?: boolean;
  onRowClick?: (data: T) => void;
  rowsPerPage?: number;
  skeletonRowsCount?: number;
  isPaginationDisabled?: boolean;
};

type Column<T> = {
  id: TableIDType<T>;
  label?: string;
  maxWidth?: number;
  fillRow?: boolean;
  justifySelf?: string;
};

export type TableIDType<T> = keyof T | "action";

export const BlDataTable = <T extends object>(props: Props<T>) => {
  const {
    columns,
    getCell,
    rows,
    getHeaderCell,
    rowEntityID,
    getBorderColor,
    onPageChange,
    resetTablePage,
    totalCount,
    isLoading,
    onRowClick,
    rowsPerPage: rowsPerPageProp,
    isPaginationDisabled,
    skeletonRowsCount,
  } = props;
  const theme = useTheme();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageProp ?? 25);

  const [showLoader, setShowLoader] = React.useState(false);
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);

  const { t } = useResource();

  const wasLoaded = usePrevious(isLoading);
  React.useEffect(() => {
    if (!isLoading && wasLoaded) {
      setIsInitialLoad(false);
    }
  }, [isLoading, wasLoaded]);

  React.useEffect(() => {
    const timeout = setTimeout(
      () => setShowLoader(!!isLoading),
      isInitialLoad ? 0 : 300
    );
    if (!isLoading) {
      clearTimeout(timeout);
      setShowLoader(false);
    }
    return () => clearTimeout(timeout);
  }, [isLoading, isInitialLoad]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
    onPageChange?.(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = React.useCallback(
    (rows: number) => {
      setRowsPerPage(rows);
      setPage(0);
      onPageChange?.(0, rows);
    },
    [onPageChange]
  );

  const prevResetTable = usePrevious(resetTablePage);
  // biome-ignore lint/correctness/useExhaustiveDependencies: resetTablePage is not a dependency, but it is necessary to use it to rerender table
  useEffect(() => {
    if (!isNoU(prevResetTable)) {
      handleChangeRowsPerPage(rowsPerPage);
    }
  }, [resetTablePage, handleChangeRowsPerPage, rowsPerPage, prevResetTable]);

  const getGridTemplateColumns = () => {
    let result = "";

    // biome-ignore lint/complexity/noForEach: <explanation>
    columns.forEach((x) => {
      const maxWidth = x.maxWidth ? `${x.maxWidth}px` : null;
      result += `minmax(auto, ${x.fillRow ? "1fr" : maxWidth ?? "auto"}) `;
    });

    return result;
  };

  const getRows = () => {
    if (!onPageChange) {
      return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }
    return rows;
  };

  return (
    <>
      <StyledTableWrapper
        $gridTemplateColumns={getGridTemplateColumns()}
        $columnsCount={columns.length}
        $hasHeader={!!getHeaderCell}
        className={"primary-table"}
      >
        {getHeaderCell && (
          <>
            {columns.map((column) => (
              <StyledHeaderCell
                key={`${column.id.toString()}`}
                $justifySelf={column.justifySelf}
              >
                {getHeaderCell(column)}
              </StyledHeaderCell>
            ))}
          </>
        )}

        {!showLoader &&
          getRows().map((row) => (
            <React.Fragment key={`${row.data[rowEntityID]}`}>
              {columns.map((column) => (
                <StyledCell
                  key={`${row.data[rowEntityID]}-${column.id.toString()}`}
                  $borderColor={
                    getBorderColor
                      ? getBorderColor(row.data)
                      : theme.colors.gray
                  }
                  $justifySelf={column.justifySelf}
                  $clickable={!!onRowClick}
                  onClick={() => onRowClick?.(row.data)}
                >
                  {getCell(column.id, row.data)}
                </StyledCell>
              ))}
            </React.Fragment>
          ))}
      </StyledTableWrapper>

      {!showLoader && getRows().length === 0 && (
        <StyledNoData>
          <Typography>{t(Resources.Table.NoData)}</Typography>
        </StyledNoData>
      )}

      {showLoader && (
        <TableSkeleton rowsCount={skeletonRowsCount ?? rowsPerPage} />
      )}

      {!isPaginationDisabled && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={totalCount ?? rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(event) =>
            handleChangeRowsPerPage(+event.target.value)
          }
          backIconButtonProps={{ title: t(Resources.Table.PrevPage) }}
          nextIconButtonProps={{ title: t(Resources.Table.NextPage) }}
          labelDisplayedRows={(paginationInfo) => `${paginationInfo.count}`}
          labelRowsPerPage={t(Resources.Table.RowsPerPage)}
        />
      )}
    </>
  );
};
