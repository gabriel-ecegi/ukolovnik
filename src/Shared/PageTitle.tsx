import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";

type Props = { title: string; goBackUrl?: string; onChevronClick?: () => void };

export const Wrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const StyledBlDefaultButton = styled(BlDefaultButton)`
  cursor: pointer;
  margin-right: ${(props) => props.theme.spacing(1)};
  aspect-ratio: 1;

  svg {
    height: 18px;
    width: auto;
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

export const PageTitle: React.FunctionComponent<Props> = ({
  title,
  goBackUrl,
  onChevronClick,
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper className="page-title-wrapper">
      {(!!goBackUrl || onChevronClick) && (
        <StyledBlDefaultButton
          onClick={() =>
            !!onChevronClick
              ? onChevronClick()
              : !!goBackUrl && navigate(goBackUrl)
          }
        >
          <ArrowLeftIcon />
        </StyledBlDefaultButton>
      )}
      <Typography variant="h1">{title}</Typography>
    </Wrapper>
  );
};
