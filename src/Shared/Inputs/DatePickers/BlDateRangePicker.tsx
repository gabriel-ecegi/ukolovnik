import { AmpPlugin, PresetPlugin, RangePlugin } from "@easepick/bundle";
import { useTheme } from "@mui/material";
import { Resources, useResource } from "Infrastructure/Translations/Resources";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";
import { CrossIcon, ExpandArrowIcon } from "Shared/Icons";
import { BlDateRangePickerStyles } from "Shared/Inputs/DatePickers/BlDateRangePickerStyles";
import React, { useCallback, useMemo, useRef, useState } from "react";
import EasePicker, { EasePickOptions } from "react-easepick";

export type DateRange = {
  start: Date | undefined;
  end: Date | undefined;
};

type Props = {
  hasFilterStyle?: boolean;
  onChange?: (dateRange: DateRange) => void;
  displayFormat?: string;
};

export const BlDateRangePicker: React.FunctionComponent<Props> = (props) => {
  const { onChange, hasFilterStyle, displayFormat } = props;
  const { t } = useResource();

  const [dateRange, setDate] = useState<{
    start: Date | undefined;
    end: Date | undefined;
  }>({
    start: undefined,
    end: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    ({ start, end }: DateRange) => {
      setDate({
        start,
        end,
      });
      if (!!onChange) {
        onChange({ start, end });
      }
    },
    [onChange]
  );

  const theme = useTheme();
  const popupCss = useMemo(
    () => BlDateRangePickerStyles.getPopupCss(theme),
    [theme]
  );
  const crossIconRef = useRef<HTMLDivElement | null>(null);

  const [presetsLabels] = useState([
    t(Resources.BlDatePicker.Presets.Today),
    t(Resources.BlDatePicker.Presets.Yesterday),
    t(Resources.BlDatePicker.Presets.Last7Days),
    t(Resources.BlDatePicker.Presets.Last30Days),
    t(Resources.BlDatePicker.Presets.ThisMonth),
    t(Resources.BlDatePicker.Presets.LastMonth),
  ]);
  const [localeLabels] = useState({
    one: t(Resources.BlDatePicker.Locales.One),
    two: t(Resources.BlDatePicker.Locales.Two),
    few: t(Resources.BlDatePicker.Locales.Few),
    other: t(Resources.BlDatePicker.Locales.Other),
    many: t(Resources.BlDatePicker.Locales.Many),
    zero: t(Resources.BlDatePicker.Locales.Zero),
  });

  const options: EasePickOptions = useMemo(
    () => ({
      css: `${BlDateRangePickerStyles.copyOfLibraryStyles}${popupCss}`,
      lang: "cs-CZ",
      RangePlugin: {
        locale: localeLabels,
      },
      plugins: [RangePlugin, AmpPlugin, PresetPlugin],
      AmpPlugin: {
        darkMode: false,
        resetButton: true,
        dropdown: {
          years: true,
          months: true,
        },
        locale: {
          resetButton:
            crossIconRef.current?.querySelector("svg")?.outerHTML ?? undefined,
        },
      },
      PresetPlugin: {
        customLabels: presetsLabels,
      },
      zIndex: 10,
      setup(picker) {
        picker.on("select", (e: { detail: { start: any; end: any } }) => {
          const { start, end } = e.detail;
          handleChange({ start, end });
        });

        picker.on("clear", () => {
          handleChange({ start: undefined, end: undefined });
        });

        picker.on("show", () => {
          setIsOpen(true);
        });
        picker.on("hide", () => {
          setIsOpen(false);
        });
      },
      format: displayFormat ?? "D.M.YYYY",
    }),
    [handleChange, popupCss, presetsLabels, localeLabels, displayFormat]
  );

  return (
    <>
      <BlDateRangePickerStyles.StyledWrapper
        $isOpen={isOpen}
        $hasFilterStyle={hasFilterStyle ?? false}
      >
        <EasePicker
          startDate={dateRange.start}
          endDate={dateRange.end}
          options={options}
          placeholder={t(Resources.BlDatePicker.Placeholder)}
        />
        <div className="bl-date-range-picker__fieldset" />

        <BlDateRangePickerStyles.StyledCrossIcon
          ref={crossIconRef}
          hidden={hasFilterStyle || (!dateRange.start && !dateRange.end)}
        >
          <BlDefaultButton
            onClick={() => handleChange({ start: undefined, end: undefined })}
          >
            <CrossIcon />
          </BlDefaultButton>
        </BlDateRangePickerStyles.StyledCrossIcon>

        {hasFilterStyle && (
          <BlDateRangePickerStyles.StyledCrossIcon>
            <ExpandArrowIcon />
          </BlDateRangePickerStyles.StyledCrossIcon>
        )}
      </BlDateRangePickerStyles.StyledWrapper>
    </>
  );
};
