import Dialog from "@mui/material/Dialog";
import type { DialogContentProps } from "@mui/material/DialogContent";
import type { DialogTitleProps } from "@mui/material/DialogTitle";

import { DocboxPdfViewerProvider } from "../../pdf";
import PdfPreviewDialogHeader from "./PdfPreviewDialogHeader";
import PdfPreviewDialogContent from "./PdfPreviewDialogContent";

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

export default function PdfPreviewDialog({
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
  return (
    <Dialog open={open} onClose={onClose} fullWidth fullScreen maxWidth="xl">
      {open && (
        <DocboxPdfViewerProvider
          src={previewURL}
          documentInitParams={{ withCredentials: true }}
          onClose={onClose}
        >
          {(error, ready, progress) => (
            <>
              <PdfPreviewDialogHeader
                onClose={onClose}
                fileName={fileName}
                downloadURL={downloadURL}
                actions={actions}
                generated={generated}
                titleProps={titleProps}
              />

              <PdfPreviewDialogContent
                error={error}
                ready={ready}
                progress={progress}
                contentProps={contentProps}
              />
            </>
          )}
        </DocboxPdfViewerProvider>
      )}
    </Dialog>
  );
}
