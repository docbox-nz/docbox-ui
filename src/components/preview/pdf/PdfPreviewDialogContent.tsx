import { DocboxPdfViewerContent } from "../../pdf";
import { useResponsiveDown } from "../../../hooks/use-responsive";

import Box from "@mui/material/Box";
import DialogContent, {
  type DialogContentProps,
} from "@mui/material/DialogContent";
import LinearProgress from "@mui/material/LinearProgress";
import { Paper } from "@mui/material";

type Props = {
  /** Whether the file is ready */
  ready: boolean;
  error?: unknown;
  progress?: number;
  contentProps?: DialogContentProps;
};

export default function PdfPreviewDialogContent({
  error,
  ready,
  progress,
  contentProps,
}: Props) {
  const isMobile = useResponsiveDown("md");

  return (
    <DialogContent
      {...contentProps}
      sx={{
        position: "relative",
        p: 0,
        m: 0,
        width: 1,
        height: "75vh",
        overflow: "hidden",
        ...contentProps?.sx,
      }}
    >
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {!ready && (
          <Box
            sx={{
              px: 5,
              width: 1,
              flexGrow: 1,
              minHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinearProgress
              value={progress}
              color="inherit"
              sx={{ width: 1, maxWidth: 360 }}
            />
          </Box>
        )}
        {ready && <DocboxPdfViewerContent showThumbnails={!isMobile} />}
      </Box>
    </DialogContent>
  );
}
