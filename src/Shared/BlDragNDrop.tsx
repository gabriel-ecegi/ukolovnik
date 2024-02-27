import * as React from "react";
import { useDropzone } from "react-dropzone";
import { PersonSquaredIcon } from "Shared/Icons";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";
import { Typography, useTheme } from "@mui/material";
import { StyledFlex } from "Shared/StyledComponents";
import styled from "@emotion/styled";

type Props = {
  file: File | null;
  title: string;
  description?: string;
  onChange: (file: File) => void;
  acceptFileName?: string;
};

const StyledWrapper = styled.div<{ isDragActive: boolean }>`
  margin-bottom: ${(props) => props.theme.spacing(3)};
  button {
    display: grid;
    justify-items: center;
    text-align: center;
    gap: ${(props) => props.theme.spacing(2)};
    padding: ${(props) => props.theme.spacing(4, 3)};
    text-transform: none;
    border: 1px dashed ${(props) => props.theme.colors.border};
    border-color: ${(props) => props.theme.colors.border};
    outline: none;
    min-height: 100px;
  }

  .label {
    font-weight: 700;
  }

  .file-names {
    font-weight: 300;
    font-size: 12px;
  }

  svg {
    width: 35px;
    height: auto;
    stroke-width: 20px;

    path {
      stroke-width: 1px;
    }
    #cloud {
      fill: #fff;
    }
  }
`;

const Description = styled(Typography)`
  font-size: 12px;
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: left;
`;

export const BlDragNDrop: React.FunctionComponent<Props> = (props) => {
  const { onChange, title, description } = props;
  const [file, setFile] = React.useState<File | null>(props.file);
  const theme = useTheme();

  const acceptFiles = {
    "image/png": [".png"],
    "image/jpeg": [".jpeg", ".jpg"],
    "application/pdf": [".pdf"],
  };

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptFiles,
  });

  return (
    <StyledWrapper
      {...getRootProps()}
      isDragActive={isDragActive}
      tabIndex={-1}
    >
      <input {...getInputProps()} />
      <BlDefaultButton fullWidth>
        <div>
          {file ? (
            <div>
              <Typography className={"label"}>{file.name}</Typography>
            </div>
          ) : (
            <StyledFlex $alignItems="center" $gap={1}>
              <PersonSquaredIcon color={theme.palette.common.black} />
              <div>
                <Typography
                  color={($props) => $props.palette.common.black}
                  fontWeight={600}
                >
                  {title}
                </Typography>
                <div>
                  <Description>{description}</Description>
                </div>
              </div>
            </StyledFlex>
          )}
        </div>
      </BlDefaultButton>
    </StyledWrapper>
  );
};
