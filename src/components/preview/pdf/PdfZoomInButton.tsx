import { useViewport } from "@jacobtread/pdfreader";
import Button from "@mui/material/Button";
import ZoomIn from "~icons/lucide/zoom-in";
import { Box } from "@mui/material";

export default function PdfZoomInButton() {
  const { setZoom } = useViewport();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setZoom((zoom) => Number((zoom + 0.1).toFixed(1)));
      }}
    >
      <Box component={ZoomIn} width={20} height={20} />
    </Button>
  );
}
