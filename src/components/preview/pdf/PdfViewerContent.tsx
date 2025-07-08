import { type HTMLProps } from "react";

import {
  Viewport,
  Pages,
  Page,
  CanvasLayer,
  TextLayer,
  AnnotationLayer,
  Thumbnails,
  Thumbnail,
} from "@jacobtread/pdfreader";

import styles from "./DocboxPdfViewer.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  showThumbnails?: boolean;
};

export default function PdfViewerContent({ showThumbnails }: Props) {
  return (
    <Box data-pdf-layout className={styles.layout}>
      {showThumbnails && (
        <Box data-pdf-thumbnails-wrapper className={styles.thumbnailsWrapper}>
          <Thumbnails data-pdf-thumbnails className={styles.thumbnails}>
            <ThumbnailPage />
          </Thumbnails>
        </Box>
      )}

      <Viewport className={styles.viewport}>
        <Pages>
          <Page className={styles.page}>
            <CanvasLayer />
            <TextLayer />
            <AnnotationLayer />
          </Page>
        </Pages>
      </Viewport>
    </Box>
  );
}

function ThumbnailPage({
  pageNumber = 1,
  ...props
}: HTMLProps<HTMLCanvasElement> & { pageNumber?: number }) {
  return (
    <Box className={styles.thumbnailWrapper} data-pdf-thumbnail-wrapper>
      <Thumbnail
        className={styles.thumbnail}
        pageNumber={pageNumber}
        data-pdf-thumbnail
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(props as any)
        }
      />
      <Typography variant="caption" data-pdf-thumbnail-page-number>
        {pageNumber}
      </Typography>
    </Box>
  );
}
