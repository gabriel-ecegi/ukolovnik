import { Theme, css } from "@emotion/react";
import { Link, LinkProps } from "react-router-dom";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";

type Props = React.PropsWithoutRef<LinkProps> &
  React.RefAttributes<HTMLAnchorElement> & {
    isWithIcon?: boolean;
    isUnderlined?: boolean;
  };

const baseLinkStyles = (props: { theme: Theme }) => css`
  text-decoration: inherit;
  color: ${props.theme.palette.primary.main};
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

export const StyledHtmlLink = styled.a`
  ${baseLinkStyles}
`;

const StyledLink = styled(Link, { shouldForwardProp: isPropValid })<{
  $isUnderlined?: boolean;
}>`
  ${baseLinkStyles}
  ${(props) => props.$isUnderlined && "text-decoration: underline;"}
`;

const StyledWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 16px;
    height: auto;
    margin-right: ${(props) => props.theme.spacing(1)};
  }
`;

export const UnstyledLink: React.FunctionComponent<Props> = (props) => {
  const { isWithIcon, isUnderlined, ...rest } = props;

  return isWithIcon ? (
    <StyledWrapper>
      <StyledLink tabIndex={-1} $isUnderlined={isUnderlined} {...rest}>
        {props.children}
      </StyledLink>
    </StyledWrapper>
  ) : (
    <StyledLink tabIndex={-1} $isUnderlined={isUnderlined} {...rest} />
  );
};
