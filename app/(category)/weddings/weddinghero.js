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

export default function WeddingHero() {
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
            background: `linear-gradient(90deg, #B28648 0 55%, transparent 0 45%), 0 0 / 55% 100%, #EDE9E9  55% 0 / 45% 100%`,
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
                    VOWS AND CAKE IN SWEET HARMONY
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
                    We create wedding cakes that are as magnificent and
                    unforgettable as the day itself. For the most special
                    celebration of your life, only the finest ingredients,
                    impeccable design and lavish perfection will do.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="/showcase/weddings">
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
                      Begin your sweet forever
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={6}
              sx={{ display: { xs: "none", sm: "flex", lg: "block" } }}
              mt={{ sm: -5, md: -10, lg: -5 }}
              ml={{ sm: -10, lg: 0 }}
            >
              <Image
                src="/wedding_pages.png"
                alt="wedding cake"
                priority
                blurDataURL="/wedding_pages.png"
                placeholder="blur"
                width={600}
                height={650}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
