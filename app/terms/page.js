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
import HeroBar from "../utils/herobar";
import MainFooter from "../utils/footer";
import ScrollTop from "../utils/scroller";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function TermsAndConditions(props) {
  return (
    <Box>
      <CssBaseline />

      <Box>
        <HeroBar />
        <Toolbar id="back-to-top-anchor" />
      </Box>

      <Box mt={10}>
        <Container maxWidth="lg">
          <Container maxWidth="lg">
            <Typography
              style={cinzel.style}
              variant="hi"
              component="h1"
              sx={{ fontSize: 30 }}
            >
              Terms & Conditions
            </Typography>
          </Container>
        </Container>
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
