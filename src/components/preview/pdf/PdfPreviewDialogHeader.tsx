import Button from "@mui/material/Button";
import DialogTitle, { type DialogTitleProps } from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import PdfRotateClockwiseButton from "./PdfRotateClockwiseButton";
import PdfZoomInButton from "./PdfZoomInButton";
import PdfZoomOutButton from "./PdfZoomOutButton";
import { useResponsiveDown } from "../../../hooks/use-responsive";
import Iconify from "../../iconify/iconify";
import ChevronLeft from "~icons/lucide/chevron-left";
import { Box } from "@mui/material";
import Download from "~icons/lucide/download";
import Info from "~icons/lucide/info";

type Props = {
  /** Function to close the dialog */
  onClose: VoidFunction;
  /** Name of the file */
  fileName: string;
  /** Optional URL for downloading the file */
  downloadURL?: string;
  /** Slot to add additional actions buttons */
  actions?: React.ReactNode;
  /** Whether the file was generated from another file */
  generated?: boolean;
  /** Additional props for the title element */
  titleProps?: DialogTitleProps;
};

export default function PdfPreviewDialogHeader({
  onClose,
  fileName,
  downloadURL,
  actions,
  generated,
  titleProps,
}: Props) {
  const isMobile = useResponsiveDown("md");

  return (
    <DialogTitle {...titleProps}>
      {isMobile ? (
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: 1, position: "relative", overflow: "hidden" }}
          spacing={1}
        >
          {/* Close button */}
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ minWidth: 0, flexShrink: 0 }}
          >
            <Box component={ChevronLeft} width={20} height={20} />
          </Button>

          {fileName && (
            <Typography
              variant="subtitle1"
              sx={{
                flex: "auto",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {fileName}
            </Typography>
          )}

          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <PdfRotateClockwiseButton />
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={2}>
          <Grid container alignItems="center">
            <Grid size={{ xs: 4 }} sx={{ overflow: "hidden" }}>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                sx={{ overflow: "hidden" }}
              >
                {fileName && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {fileName}
                  </Typography>
                )}

                {generated && (
                  <Tooltip title="This preview was generated from another file format, it may differ from the actual file">
                    <Box component={Info} width={24} color="info.main" />
                  </Tooltip>
                )}
              </Stack>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <PdfZoomOutButton />
                <PdfZoomInButton />
                <PdfRotateClockwiseButton />
              </Stack>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                {actions}

                {downloadURL && (
                  <Button
                    variant="outlined"
                    href={downloadURL}
                    color="inherit"
                    sx={{ minWidth: 0 }}
                    download="test.jpg"
                  >
                    <Box component={Download} width={20} height={20} />
                  </Button>
                )}

                <Button variant="outlined" color="inherit" onClick={onClose}>
                  Close
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      )}
    </DialogTitle>
  );
}
