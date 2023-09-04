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

export default function BirthdayHero() {
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
            background: `url(/category_page_1.png)  0 0 / 55% 100%, #D9D9D9   55% 0 / 45% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: { sm: "left, right", xs: "left" },

            opacity: 1,
            //backgroundColor: "tertiary.main",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // "&:nth-of-type(2)": {
            //   backgroundColor: "#fff",
            // },
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
            <Grid item xs={12} sm={6} mt={{ xs: 10, sm: 20 }}>
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
                    BIRTHDAY BLISS BY THE SLICE
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
                    We craft cherished keepsakes as distinct as the lives we
                    celebrate. Our birthday cakes are an indulgent work of art
                    created just for you. At T&B, we thrive on mixing creativity
                    with your perfect idea to craft cakes that dazzle and
                    delight.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="/showcase/birthdays">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "tertiary.main",
                        color: "secondary.main",
                        fontSize: 18,
                        width: "15rem",

                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "tertiary.main",
                        },
                      }}
                      style={montserrat.style}
                    >
                      Make a wish here
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
                ml: { sm: -15, md: -10, lg: -5 },
              }}
              mt={-3}
            >
              <Image
                src="/birthday_page.png"
                alt="birthday cake"
                priority
                blurDataURL="/birthday_page.png"
                placeholder="blur"
                width={667}
                height={623}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
