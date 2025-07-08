import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import PdfPreviewDialog from "./PdfPreviewDialog";

import sample from "../../../stories/assets/sample.pdf";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const meta = {
  title: "Example/PdfPreviewDialog",
  component: PdfPreviewDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    open: true,
    onClose: fn(),
    fileName: "sample.pdf",
    previewURL: sample,
    downloadURL: sample,
    generated: false,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof PdfPreviewDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: fn(),
    previewURL: sample,
  },
};
