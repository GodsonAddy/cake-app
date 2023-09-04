"use client";
import React from "react";
import { Box, CssBaseline, Fab, Toolbar } from "@mui/material";
import HeroBar from "../utils/herobar";
import MainFooter from "../utils/footer";
import ScrollTop from "../utils/scroller";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LuxuriousRequest from "./luxuryrequest";

export default function RequestAquote(props) {
  return (
    <Box>
      <CssBaseline />
      <Box>
        <HeroBar />
        <Toolbar id="back-to-top-anchor" />
      </Box>
      <LuxuriousRequest />
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
