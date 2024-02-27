import styled from "@emotion/styled";

type StyledTableWrapperType = {
  $gridTemplateColumns: string;
  $columnsCount: number;
  $hasHeader: boolean;
};

const StyledTableWrapper = styled.div<StyledTableWrapperType>`
  display: grid;
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  gap: ${(props) => props.theme.spacing(1, 0)};
  margin-top: ${(props) => props.theme.spacing(2)};

  & > div {
    border-bottom: 1.5px solid;
  }

  ${(props) =>
    props.$hasHeader &&
    `
    & > div:nth-of-type(1) {
      padding-left: ${props.theme.spacing(2)};
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &> div:nth-of-type(${props.$columnsCount}) {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `}

  &
    > div:nth-of-type(
      ${(props) => props.$columnsCount}n
        + ${(props) => (props.$hasHeader ? props.$columnsCount + 1 : 1)}
    ) {
    border-left: 0;
    padding-left: ${(props) => props.theme.spacing(2)};
  }

  &
    > div:nth-of-type(
      ${(props) => props.$columnsCount}n
        + ${(props) => props.$columnsCount * (props.$hasHeader ? 2 : 1)}
    ) {
    border-right: 0;
    padding-right: ${(props) => props.theme.spacing(1)};
  }
`;

const StyledHeaderCell = styled.div<{ $justifySelf?: string }>`
  padding: ${(props) => props.theme.spacing(0.8, 3.5, 0.8, 0)};
  color: ${(props) => props.theme.palette.text.secondary};
  border-color: transparent !important;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifySelf ?? ""};
  background-color: ${(props) => props.theme.colors.gray};
`;

const StyledCell = styled.div<{
  $justifySelf?: string;
  $borderColor: string;
  $clickable: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifySelf ?? ""};
  padding: ${(props) => props.theme.spacing(1, 3.5, 1, 0)};
  min-height: 72px;
  border-color: ${(props) => props.$borderColor} !important;
  font-weight: 500;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

const StyledNoData = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  padding: ${(props) => props.theme.spacing(3)};
`;

export { StyledCell, StyledHeaderCell, StyledTableWrapper, StyledNoData };
