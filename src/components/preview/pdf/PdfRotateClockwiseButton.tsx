import { useViewport } from "@jacobtread/pdfreader";
import Button from "@mui/material/Button";
import Iconify from "../../iconify/iconify";

export default function PdfRotateClockwiseButton() {
  const { setRotation } = useViewport();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setRotation((rotation) => (rotation + 90) % 360);
      }}
      sx={{ minWidth: 0 }}
    >
      <Iconify icon="lucide:rotate-cw" />
    </Button>
  );
}
