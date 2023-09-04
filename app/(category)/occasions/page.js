"use client";
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import SeasonalHero from "./occasionshero";
import MerryCelebrations from "./merry";
import OccasionsHero from "./occasionshero";

export default function OccasionsPage() {
  return (
    <Box>
      <CssBaseline />
      <OccasionsHero />
      <MerryCelebrations />
    </Box>
  );
}
