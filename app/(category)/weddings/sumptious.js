"use client";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../../font";
import { Card, CardCover } from "@mui/joy";
import Link from "next/link";

export default function SumptiousCakes() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            display="flex"
            columnSpacing={4}
            justifyContent="space-evenly"
            alignItems="center"
            px={{ xs: 0, lg: 10 }}
          >
            <Grid item xs={12} lg={6} mt={{ xs: 10, lg: 0 }}>
              <Grid
                container
                display="flex"
                rowSpacing={4}
                flexDirection="column"
              >
                <Grid item>
                  <div>
                    <Typography
                      style={cinzel.style}
                      variant="h1"
                      component="h1"
                      sx={{ fontSize: 40 }}
                    >
                      SUMPTIOUS SHOW-STOPPING CAKES
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat.style}
                    variant="body1"
                    component="p"
                    sx={{ fontSize: 15, lineHeight: 2 }}
                  >
                    For a once-in-a-lifetime celebration, only an extraordinary
                    cake will do. Our goal is to craft a wedding cake as
                    wondrous and unique as a couple&apos;s love story. The
                    possibilities for a bespoke T&B Cake Craft creation are as
                    endless as a bride&apos;s imagination.
                  </Typography>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/showcase/weddings">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "secondary.main",
                        fontSize: 18,

                        width: "18rem",

                        "&:hover": {
                          backgroundColor: "tertiary.main",
                          color: "secondary.main",
                        },
                      }}
                      style={montserrat.style}
                    >
                      Discover sweet treats
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} mt={{ xs: 5, lg: 0 }}>
              <Box
                sx={{
                  "&:hover": {
                    //backgroundColor: "silver[400]",
                    transform: "scale(1.01)",
                    boxShadow: "1px 1px 30px silver",
                    opacity: 0.5,
                  },
                }}
              >
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    p: 0,
                    m: 0,
                    width: "100%",
                    height: 506,
                  }}
                >
                  <Card component="li" sx={{ width: "100%" }}>
                    <CardCover>
                      <Image
                        src="/face_of_wedding.png"
                        alt="cake"
                        priority
                        fill
                        placeholder="blur"
                        blurDataURL="/face_of_wedding.png"
                      />
                    </CardCover>
                  </Card>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
