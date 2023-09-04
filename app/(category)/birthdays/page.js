"use client";
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import BirthdayHero from "./birthdayhero";
import CakeCheer from "./cakecheer";

export default function BirthdayPage() {
  return (
    <Box>
      <CssBaseline />
      <BirthdayHero />
      <CakeCheer />
    </Box>
  );
}
