"use client";
import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Fab,
  Toolbar,
  Typography,
} from "@mui/material";
import { montserrat, cinzel } from "../font";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../utils/scroller";
import MainFooter from "../utils/footer";
import HeroBar from "../utils/herobar";
import TrainingHero from "./traininghero";

export default function Training(props) {
  return (
    <Box>
      <CssBaseline />

      <Box>
        <TrainingHero />
      </Box>

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
