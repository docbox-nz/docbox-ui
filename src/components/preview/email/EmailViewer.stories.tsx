import type { Meta, StoryObj } from "@storybook/react-vite";

import EmailViewer from "./EmailViewer";

import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const meta = {
  title: "Example/EmailViewer",
  component: EmailViewer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    containerProps: {
      sx: {
        width: "900px",
        height: "700px",
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof EmailViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subject: "An interesting example email",
    from: { name: "Jacob Read", address: "spam@jacobtread.com" },
    to: [
      { name: "Example", address: "example@example.com" },
      { name: "Test", address: "test@example.com" },
    ],
    html: `
    <h1 style="color: white">This is an example email</h1>
    <p style="color: white; background-color: red;">Some example text content</p>
    <p style="color:white;position:fixed;bottom:0;">Some example text content</p>

    <img src="-1231" onclick="alert(1)"/>
    <p style="height: 800px; color: white">
    Fake really long content
    </p>
`,
  },
};
