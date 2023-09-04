"use client";
import React from "react";
import { Box, CssBaseline, Container, Grid, Toolbar, Fab } from "@mui/material";
import HeroBar from "../utils/herobar";
import ScrollTop from "../utils/scroller";
import MainFooter from "../utils/footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PortfolioTheater from "./theater";
import PortfolioAdventure from "./adventure";

export default function CakePortfolio(props) {
  return (
    <Box>
      <CssBaseline />
      <Box>
        <HeroBar />
        <Toolbar id="back-to-top-anchor" />
      </Box>
      <PortfolioTheater />
      <Box
        sx={{ border: " 0.644248px dashed #69501F", width: "100%", mb: 2 }}
      />
      <PortfolioAdventure />
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
