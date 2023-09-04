"use client";
import React from "react";
import { Box, Fab } from "@mui/material";
import ScrollTop from "../utils/scroller";
import MainFooter from "../utils/footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// export const metadata = {
//   title: "About | CakeCraft",
//   description: "Cake App",
// };

export default function AboutLayout({ children }, props) {
  return (
    <Box>
      <Box>{children}</Box>
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: "tertiary.main",
            "&:hover": {
              backgroundColor: "tertiary.main",
              color: "secondary.main",
            },
          }}
        >
          <KeyboardArrowUpIcon color="secondary" />
        </Fab>
      </ScrollTop>
      <MainFooter />
    </Box>
  );
}
