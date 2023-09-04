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

export default function AsianHero() {
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
            background: `linear-gradient(90deg, #B28648 0 55%, transparent 0 45%),#EDE9E9   55% 0 / 45% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: { sm: "left, right", xs: "left" },

            opacity: 1,
            // backgroundColor: "tertiary.main",
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
            backgroundColor: `#B28648`,

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
                    FUSION AND FLAVOUR,THE ASIAN WAY
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
                    We specialize in creating opulent Asian-inspired wedding
                    cakes tailored to reflect your cultural traditions and
                    personal style. A once-in-a-lifetime celebration calls for
                    an exotic cake fantasy. Let&apos;s create it together!
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="/showcase/asian">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "secondary.main",
                        color: "tertiary.main",
                        fontSize: 18,
                        width: "18rem",

                        "&:hover": {
                          backgroundColor: "tertiary.main",
                          color: "secondary.main",
                        },
                      }}
                      style={montserrat.style}
                    >
                      Taste Cultural Fusion
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
                ml: { sm: -10, md: -10, lg: 0 },
                mt: { md: -5 },
              }}
            >
              <Image
                src="/asian_page.png"
                alt="asian cake"
                priority
                blurDataURL="/asian_page.png"
                placeholder="blur"
                width={627}
                height={630}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
