import { useViewport } from "@jacobtread/pdfreader";
import Button from "@mui/material/Button";
import ZoomOut from "~icons/lucide/zoom-out";
import { Box } from "@mui/material";

export default function PdfZoomOutButton() {
  const { setZoom } = useViewport();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setZoom((zoom) => Number((zoom - 0.1).toFixed(1)));
      }}
    >
      <Box component={ZoomOut} width={20} height={20} />
    </Button>
  );
}
