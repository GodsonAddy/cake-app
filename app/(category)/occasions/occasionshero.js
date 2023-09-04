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
} from "../../font";
import HeroBar from "../../utils/herobar";
import Link from "next/link";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";

export default function OccasionsHero() {
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
            background: `url(/category_page_1.png)  0 0 / 55% 100%,#D9D9D9  55% 0 / 45% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: { sm: "left, right", xs: "left" },

            opacity: 1,
            //backgroundColor: "tertiary.main",
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
            background: `url(/about_backgroundImage_1.png)`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { sm: "left, right", xs: "left" },

            opacity: 1,
            backgroundColor: "tertiary.main",
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
    <Box>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid container display="flex">
            <Grid item xs={12} sm={6} mt={{ xs: 10, sm: 20, md: 10, lg: 20 }}>
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
                    sx={{ fontSize: 40 }}
                  >
                    DREAM CAKES FOR MOMENTS THAT MATTER
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat.style}
                    variant="body1"
                    component="p"
                    sx={{ fontSize: 15, lineHeight: 2 }}
                    color="tertiary"
                  >
                    We understand that unexpected demands can arise and leave
                    little time to plan an event&apos;s crowning confection.
                    When last-minute celebrations call for a spectacular cake,
                    allow us the pleasure of stepping in - your vision is our
                    only guide.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="/showcase/occasions">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "tertiary.main",
                        color: "secondary.main",
                        fontSize: 18,
                        width: "18rem",

                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "tertiary.main",
                        },
                      }}
                      style={montserrat.style}
                    >
                      Celebrate each moment
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={6}
              sx={{
                display: { xs: "none", sm: "flex" },
                ml: { sm: -15, lg: -5 },
              }}
              mt={-5}
            >
              <Image
                src="/seasonal_pages.png"
                alt="seasonal cake"
                priority
                blurDataURL="/seasonal_pages.png"
                placeholder="blur"
                width={683}
                height={604}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
