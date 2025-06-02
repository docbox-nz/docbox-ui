import type { DocumentInitParameters } from "pdfjs-dist/types/src/display/api";

import DocboxPdfViewerProvider from "./DocboxPdfViewerProvider";
import DocboxPdfViewerContent from "./DocboxPdfViewerContent";

type Props = {
  src: string;
  documentInitParams?: Partial<DocumentInitParameters>;
  onClose: VoidFunction;
};

export default function DocboxPdfViewer({
  src,
  documentInitParams,
  onClose,
}: Props) {
  return (
    <DocboxPdfViewerProvider
      src={src}
      documentInitParams={documentInitParams}
      onClose={onClose}
    >
      {(_error, ready) => (
        <>
          {!ready && "Loading... "}
          {ready && <DocboxPdfViewerContent showThumbnails />}
        </>
      )}
    </DocboxPdfViewerProvider>
  );
}
