import type { DocumentInitParameters } from "pdfjs-dist/types/src/display/api";
import { useMemo, useState } from "react";

import { Root } from "@jacobtread/pdfreader";
import PdfViewerPasswordPrompt from "./PdfViewerPasswordPrompt";

import styles from "./PdfViewer.module.css";
import "@jacobtread/pdfreader/style.css";

type Props = {
  src: string;
  documentInitParams?: Partial<DocumentInitParameters>;
  onClose: VoidFunction;
} & Omit<React.ComponentProps<typeof Root>, "fileURL">;

export default function PdfViewerProvider({
  src,
  documentInitParams,
  onClose,
  ...props
}: Props) {
  const [password, setPassword] = useState<string | undefined>(undefined);
  const initParams: DocumentInitParameters = useMemo(
    () => ({
      ...documentInitParams,
      url: src,
      password: password,
    }),
    [src, password, documentInitParams]
  );

  return (
    <Root fileURL={initParams} className={styles.root} {...props} data-pdf-root>
      {(error, ready, progress) => (
        <>
          {error && isPasswordError(error) ? (
            <HandleError
              error={error}
              setPassword={setPassword}
              onClose={onClose}
            />
          ) : (
            props.children(error, ready, progress)
          )}
        </>
      )}
    </Root>
  );
}

function isPasswordError(error: unknown): error is Error {
  return (
    error instanceof Error &&
    error.name === "PasswordException" &&
    (error.message === "No password given" ||
      error.message === "Incorrect Password")
  );
}

function HandleError({
  error,
  setPassword,
  onClose,
}: {
  error: Error;
  setPassword: (password: string) => void;
  onClose: VoidFunction;
}) {
  // Missing password
  if (error.message === "No password given") {
    return (
      <PdfViewerPasswordPrompt
        onClose={onClose}
        onSubmit={(password) => {
          setPassword(password);
        }}
      />
    );
  }

  // Failed password
  if (error.message === "Incorrect Password") {
    return (
      <PdfViewerPasswordPrompt
        incorrect
        onClose={onClose}
        onSubmit={(password) => {
          setPassword(password);
        }}
      />
    );
  }

  return null;
}
