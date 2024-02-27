import * as React from "react";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import styled from "@emotion/styled";

type Props = SkeletonProps;

const StyledSkeleton = styled(Skeleton)`
  background-color: ${(props) => props.theme.palette.secondary.main}33;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const BlSkeleton: React.FunctionComponent<Props> = (props) => {
  return <StyledSkeleton {...props} />;
};
