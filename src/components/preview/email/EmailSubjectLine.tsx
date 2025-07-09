import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { fDateTime } from "../../../utils/format";

type Props = {
  subject?: string;
  date?: Date;
};

/**
 * Component for the subject line of an email with an optional
 * associated date
 */
export default function EmailSubjectLine({ subject, date }: Props) {
  return (
    <Stack spacing={2} direction="row" flexShrink={0} sx={{ p: 2 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: "text.primary",
          flexGrow: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 1,
        }}
      >
        {subject}
      </Typography>

      <Stack spacing={0.5}>
        <Typography variant="caption" noWrap sx={{ color: "text.disabled" }}>
          {fDateTime(date)}
        </Typography>
      </Stack>
    </Stack>
  );
}
