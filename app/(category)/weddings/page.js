"use client";
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import WeddingHero from "./weddinghero";
import SumptiousCakes from "./sumptious";

export default function WeddingPage() {
  return (
    <Box>
      <CssBaseline />
      <WeddingHero />
      <SumptiousCakes />
    </Box>
  );
}
