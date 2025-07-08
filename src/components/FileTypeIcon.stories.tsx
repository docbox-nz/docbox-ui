import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import FileTypeIcon from "./FileTypeIcon";
import { FileType } from "../types";

const meta = {
  title: "Example/FileTypeIcon",
  component: FileTypeIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fileType: {
      options: [
        FileType.Audio,
        FileType.Document,
        FileType.Image,
        FileType.Pdf,
        FileType.Presentation,
        FileType.Text,
        FileType.Video,
        FileType.Spreadsheet,
        FileType.Generic,
      ],
      control: {
        type: "select",
        labels: {
          [FileType.Audio]: "Audio",
          [FileType.Document]: "Document",
          [FileType.Image]: "Image",
          [FileType.Pdf]: "Pdf",
          [FileType.Presentation]: "Presentation",
          [FileType.Text]: "Text",
          [FileType.Video]: "Video",
          [FileType.Spreadsheet]: "Spreadsheet",
          [FileType.Generic]: "Generic",
        },
      },
    },
  },
  args: { onClick: fn(), width: 128, height: 128 },
} satisfies Meta<typeof FileTypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fileType: FileType.Generic,
  },
};
