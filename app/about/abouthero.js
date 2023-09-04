"use client";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";
import HeroBar from "../utils/herobar";
import Link from "next/link";

export default function AboutHero() {
  return (
    <Box
      sx={{
        minWidth: "100%",
        minHeight: { xs: "100vh", sm: "80vh", md: "100vh" },
        backgroundColor: "tertiary.main",
        position: "relative",
      }}
    >
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, #B28648 0 55%, transparent 0 45%), url(/about_backgroundImage_2.png) 55% 0 / 45% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { sm: "left, right", xs: "left" },
            opacity: 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <HeroBar />
          <Toolbar id="back-to-top-anchor" />
          <MobileResponsive />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Box
          sx={{
            backgroundColor: ` #B28648`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { sm: "left, right", xs: "left" },

            opacity: 1,
          
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <HeroBar />
          <Toolbar id="back-to-top-anchor" />
          <MobileResponsive />
        </Box>
      </Box>
    </Box>
  );
}

const MobileResponsive = () => {
  return (
    <Box mt={{ xs: 10, sm: 20 }}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            rowSpacing={4}
            display="flex"
            flexDirection="column"
            ml={{ xs: 0, lg: 4 }}
          >
            <Grid item xs={10} sm={6}>
              <Typography
                style={cinzel.style}
                variant="h1"
                component="h1"
                sx={{ fontSize: 40 }}
              >
                CRAFTING DREAMS SINCE 2008
              </Typography>
            </Grid>
            <Grid item xs={10} sm={5.5}>
              <Typography
                style={montserrat.style}
                variant="body1"
                component="p"
                sx={{ fontSize: 15, lineHeight: 2 }}
                color="tertiary"
              >
                At T & B Cakecraft, we pour heart and soul into transforming
                your dream cake into a magnum opus. Our story is one of
                embracing the vision and crafting excellence without compromise.
              </Typography>
            </Grid>
            <Grid item>
              <Link href="/portfolio">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "tertiary.main",
                    fontSize: 18,
                    width: "15rem",

                    "&:hover": {
                      backgroundColor: "tertiary.main",
                      color: "secondary.main",
                    },
                  }}
                  style={montserrat.style}
                >
                  View our showcase
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
