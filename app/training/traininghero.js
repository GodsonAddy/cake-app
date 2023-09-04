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

export default function TrainingHero() {
  return (
    <Box
      sx={{
        minWidth: "100%",
        minHeight: { xs: "100vh", sm: "80vh", md: "100vh" },
        backgroundColor: "tertiary.main",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(/banner.png)`,
          backgroundRepeat: "no-repeat",
          opacity: 1,
          backgroundSize: "cover",
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
  );
}

const MobileResponsive = () => {
  return (
    <Box mt={30}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            rowSpacing={4}
            display="flex"
            flexDirection="column"
            ml={{ xs: 0, lg: 4 }}
          >
            <Grid item>
              <Typography
                style={cinzel.style}
                variant="h1"
                component="h1"
                sx={{
                  fontSize: 40,
                  color: "secondary.main",
                  textAlign: "center",
                }}
              >
                COMING SOON
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
