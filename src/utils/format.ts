import { format } from "date-fns";

type InputDate = Date | string | number | null | undefined;

export function fDate(date: InputDate, newFormat?: string) {
  if (!date) return "";
  const fm = newFormat || "dd MMM yyyy";
  return format(new Date(date), fm);
}

export function fTime(date: InputDate, newFormat?: string) {
  if (!date) return "";
  const fm = newFormat || "p";

  return format(new Date(date), fm);
}

export function fDateTime(date: InputDate, newFormat?: string) {
  if (!date) return "";

  const fm = newFormat || "dd MMM yyyy p";

  return format(new Date(date), fm);
}
