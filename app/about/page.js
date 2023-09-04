"use client";
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import AboutHero from "./abouthero";
import AboutContents from "./information";
import FormRequest from "../utils/formrequest";
import CakeBoss from "./cakeboss";

export default function AboutPage() {
  return (
    <Box>
      <CssBaseline />
      {/* App bar */}
      <AboutHero />
      {/* Cake Boss */}
      <CakeBoss />
      {/* Imagination knows no bounds */}
      <AboutContents />
      {/* Contact */}
      <FormRequest />
    </Box>
  );
}
