import { Divider, Stack, StackProps } from "@mui/material";
import EmailSubjectLine from "./EmailSubjectLine";
import { EmailEntity } from "./types";
import EmailEntitiesLine from "./EmailEntitiesLine";
import EmailContent from "./EmailContent";

type Props = {
  subject?: string;
  date?: Date;
  from?: EmailEntity;
  to?: EmailEntity[];
  html?: string;

  containerProps?: StackProps;
};

export default function EmailViewer({
  subject,
  date,
  from,
  to,
  html,
  containerProps,
}: Props) {
  return (
    <Stack
      {...containerProps}
      flexGrow={1}
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
        minWidth: 0,
        borderRadius: 1.5,
        bgcolor: "background.default",
        ...containerProps?.sx,
      }}
    >
      <EmailSubjectLine subject={subject} date={date} />

      <Divider sx={{ borderStyle: "dashed" }} />

      {from && <EmailEntitiesLine from={from} to={to ?? []} />}

      <EmailContent html={html ?? ""} />
    </Stack>
  );
}
