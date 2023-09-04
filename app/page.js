"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
  Fade,
  Fab,
  useScrollTrigger,
} from "@mui/material";
import { montserrat, montserrat500, cinzel, cinzel700 } from "./font";
import PropTypes from "prop-types";
import MainFooter from "./utils/footer";
import HeroPage from "./hero";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CakeTestimonials from "./testimonials";
import LuxuryCategories from "./luxury";
import CakeCelebrations from "./celebrations";
import CakeVision from "./vision";
import ScrollTop from "./utils/scroller";

export default function Home(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {/* App bar */}
      <HeroPage />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* <Box sx={{ display: { xs: "flex", sm: "none" }, mt: 5 }}>
          <Container>
            <Box sx={{ border: " 0.644248px dashed #69501F", width: "100%" }} />
          </Container>
        </Box> */}

        {/* YOUR VISION, OUR CRAFTSMANSHIP mobile view */}

        {/* YOUR VISION, OUR CRAFTSMANSHIP */}
        <CakeVision />
        {/*    ELEVATING YOUR CELEBRATIONS */}
        <CakeCelebrations />
        {/*  WHERE LUXURY MEETS SIMPLICITY */}
        <LuxuryCategories />
        {/* TESTIMONIALS */}
        <CakeTestimonials />
        {/* Scroll to the top*/}
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
        {/* Footer */}
        <MainFooter />
      </Box>
    </Box>
  );
}
