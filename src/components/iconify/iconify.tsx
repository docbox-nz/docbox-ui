import { forwardRef } from "react";
import { Icon, type IconifyIcon } from "@iconify/react";

import Box, { type BoxProps } from "@mui/material/Box";

interface Props extends BoxProps<typeof Icon> {
  icon: IconifyIcon | string;
}

const Iconify = forwardRef<SVGElement, Props>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

export default Iconify;
