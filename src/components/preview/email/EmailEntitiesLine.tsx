import { Avatar, ListItemText, Stack } from "@mui/material";
import { EmailEntity } from "./types";
import { getInitialsFirstAndLast } from "../../../utils/name";
import EntitySenderName from "./EntitySenderName";
import EntityRecipientName from "./EntityRecipientName";
import { Fragment } from "react/jsx-runtime";

type Props = {
  from: EmailEntity;
  to: EmailEntity[];
};

/**
 * Component for the email "entities" line shows the sender and
 * the "To:" addresses that the email was sent to
 */
export default function EmailEntitiesLine({ from, to }: Props) {
  const fromName = from.name ?? from.address ?? "Unknown";

  return (
    <Stack
      spacing={2}
      flexShrink={0}
      direction="row"
      alignItems="center"
      sx={{
        p: (theme) => theme.spacing(2, 2, 1, 2),
      }}
    >
      <Avatar sx={{ width: 32, height: 32, fontSize: 12 }} alt={fromName}>
        {getInitialsFirstAndLast(fromName)}
      </Avatar>

      <ListItemText
        primary={<EntitySenderName entity={from} />}
        secondary={
          to.length > 0 ? (
            <>
              {`To: `}
              {to.map((entity, index) => (
                <Fragment key={index}>
                  <EntityRecipientName entity={entity} />
                  {index < to.length - 1 ? ", " : ""}
                </Fragment>
              ))}
            </>
          ) : undefined
        }
        slotProps={{
          primary: {
            color: "text.primary",
          },
          secondary: {
            noWrap: true,
            component: "span",
            typography: "caption",
          },
        }}
      />
    </Stack>
  );
}
