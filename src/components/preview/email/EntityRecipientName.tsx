import { Link } from "@mui/material";
import { EmailEntity } from "./types";
import { isNil } from "../../../utils/nullable";

type Props = {
  entity: EmailEntity;
};

export default function EntityRecipientName({ entity }: Props) {
  if (isNil(entity.address)) {
    return entity.address;
  }

  return (
    <Link
      href={`mailto:${entity.address}`}
      key={entity.address}
      sx={{ color: "text.secondary" }}
    >
      {entity.address}
    </Link>
  );
}
