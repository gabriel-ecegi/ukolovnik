import * as React from "react";
import { BlSkeleton } from "Shared/BlSkeleton";
import styled from "@emotion/styled";

type Props = {
  rowsCount: number;
};

const StyledSkeleton = styled(BlSkeleton)`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const TableSkeleton: React.FunctionComponent<Props> = (props) => {
  const rows = () => {
    const result: number[] = [];
    for (let index = 0; index < props.rowsCount; index++) {
      result.push(index);
    }
    return result;
  };

  return (
    <>
      {rows().map((_x, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <StyledSkeleton key={i} height={60} variant="rectangular" />
      ))}
    </>
  );
};
