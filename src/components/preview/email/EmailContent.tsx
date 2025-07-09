import { Box, BoxProps } from "@mui/material";
import { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";

type Props = BoxProps & {
  html: string;
  wrapperProps?: BoxProps;
};

/**
 * Rendered email HTML content, this is rendered within a sandboxed iframe
 * after first being sanitized using DOMPurify
 */
export default function EmailContent({ html, wrapperProps, ...props }: Props) {
  const safeContent = useMemo(() => {
    return DOMPurify.sanitize(html);
  }, [html]);

  return (
    <Box
      {...wrapperProps}
      sx={{
        flexGrow: 1,
        overflow: { xs: "auto", md: "hidden" },
        ...wrapperProps?.sx,
      }}
    >
      <Box
        {...props}
        border="none"
        component="iframe"
        sandbox=""
        srcDoc={safeContent}
        sx={{ width: 1, height: 1, ...props.sx }}
      />
    </Box>
  );
}
