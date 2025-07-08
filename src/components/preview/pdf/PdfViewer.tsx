import type { DocumentInitParameters } from "pdfjs-dist/types/src/display/api";

import PdfViewerProvider from "./PdfViewerProvider";
import PdfViewerContent from "./PdfViewerContent";

type Props = {
  src: string;
  documentInitParams?: Partial<DocumentInitParameters>;
  onClose: VoidFunction;
};

export default function PdfViewer({ src, documentInitParams, onClose }: Props) {
  return (
    <PdfViewerProvider
      src={src}
      documentInitParams={documentInitParams}
      onClose={onClose}
    >
      {(_error, ready) => (
        <>
          {!ready && "Loading... "}
          {ready && <PdfViewerContent showThumbnails />}
        </>
      )}
    </PdfViewerProvider>
  );
}
