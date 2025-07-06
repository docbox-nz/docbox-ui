import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
  type DialogContentProps,
  type DialogTitleProps,
} from "@mui/material";
import { DocboxPdfViewerContent, DocboxPdfViewerProvider } from "../pdf";
import { useResponsiveDown } from "../../hooks/use-responsive";
import { useViewport } from "@jacobtread/pdfreader";
import Iconify from "../iconify/iconify";

type Props = {
  /** Whether the dialog is open */
  open: boolean;
  /** Function to close the dialog */
  onClose: VoidFunction;

  /** Name of the file */
  fileName: string;
  /** URL to use for the PDF preview */
  previewURL: string;
  /** URL for downloading the file */
  downloadURL?: string;
  /** Slot to add additional actions buttons */
  actions?: React.ReactNode;
  /** Whether the file was generated from another file */
  generated?: boolean;

  titleProps?: DialogTitleProps;
  contentProps?: DialogContentProps;
};

export default function DocboxPdfPreviewDialog({
  open,
  onClose,
  fileName,
  previewURL,
  downloadURL,
  actions,
  generated,
  titleProps,
  contentProps,
}: Props) {
  const isMobile = useResponsiveDown("md");

  return (
    <Dialog open={open} onClose={onClose} fullWidth fullScreen maxWidth="xl">
      {open && (
        <DocboxPdfViewerProvider
          src={previewURL}
          documentInitParams={{ withCredentials: true }}
          onClose={onClose}
        >
          {(_error, ready, progress) => (
            <>
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
                      <Iconify icon="eva:arrow-ios-back-fill" />
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
                      <RotateClockwiseButton />
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
                              <Iconify
                                icon="eva:info-fill"
                                width={24}
                                sx={{ color: "info.main" }}
                              />
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
                          <ZoomOutButton />
                          <ZoomInButton />
                          <RotateClockwiseButton />
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
                              <Iconify icon="lucide:download" />
                            </Button>
                          )}

                          <Button
                            variant="outlined"
                            color="inherit"
                            onClick={onClose}
                          >
                            Close
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                )}
              </DialogTitle>
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
                  {ready && (
                    <DocboxPdfViewerContent showThumbnails={!isMobile} />
                  )}
                </Box>
              </DialogContent>
            </>
          )}
        </DocboxPdfViewerProvider>
      )}
    </Dialog>
  );
}

function RotateClockwiseButton() {
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

function ZoomInButton() {
  const { setZoom } = useViewport();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setZoom((zoom) => Number((zoom + 0.1).toFixed(1)));
      }}
    >
      <Iconify icon="lucide:zoom-in" />
    </Button>
  );
}

function ZoomOutButton() {
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
