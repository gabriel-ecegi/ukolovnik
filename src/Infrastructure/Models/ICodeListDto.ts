export interface CodeListItem {
  id?: number;
  code: string | number;
  name: string;
  description?: string | JSX.Element;
  endAdornment?: JSX.Element;
}
