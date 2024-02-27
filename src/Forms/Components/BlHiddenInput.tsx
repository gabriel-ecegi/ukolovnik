import * as React from "react";
import { Control, Controller } from "react-hook-form";

type Props = { control: Control; name: string };

export const BlHiddenInput: React.FunctionComponent<Props> = (props) => {
  const { control, name } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, ref } }) => (
          <input hidden={true} name={name} ref={ref} />
        )}
      />
    </>
  );
};
