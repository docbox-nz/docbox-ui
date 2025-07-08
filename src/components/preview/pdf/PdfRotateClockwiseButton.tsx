import { useViewport } from "@jacobtread/pdfreader";
import Button from "@mui/material/Button";
import RotateCw from "~icons/lucide/rotate-cw";
import { Box } from "@mui/material";

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
      <Box component={RotateCw} width={20} height={20} />
    </Button>
  );
}
