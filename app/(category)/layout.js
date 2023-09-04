"use client";
import React from "react";
import { Box, Fab } from "@mui/material";
import MainFooter from "../utils/footer";
import FormRequest from "../utils/formrequest";
import ScrollTop from "../utils/scroller";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function CategoryLayout({ children }, props) {
  return (
    <Box>
      <Box>{children}</Box>
      <Box sx={{ border: " 0.644248px dashed #69501F", width: "100%" }} />
      <FormRequest />
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
