import { useViewport } from "@jacobtread/pdfreader";
import Button from "@mui/material/Button";
import Iconify from "../../iconify/iconify";

export default function PdfZoomOutButton() {
  const { setZoom } = useViewport();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setZoom((zoom) => Number((zoom - 0.1).toFixed(1)));
      }}
    >
      <Iconify icon="lucide:zoom-out" />
    </Button>
  );
}
