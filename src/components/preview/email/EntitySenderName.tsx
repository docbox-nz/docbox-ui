import { Box } from "@mui/material";
import { EmailEntity } from "./types";

type Props = {
  entity: EmailEntity;
};

export default function EntitySenderName({ entity }: Props) {
  if (entity.name) {
    return (
      <>
        {entity.name}
        {entity.address && (
          <Box
            component="span"
            sx={{ typography: "body2", color: "text.disabled" }}
          >
            {` <${entity.address}>`}
          </Box>
        )}
      </>
    );
  }

  if (entity.address) {
    return entity.address;
  }

  return "Unknown";
}
