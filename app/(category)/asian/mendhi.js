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

export default function MendhiCreation() {
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
                      MENDHI-INSPIRED CREATIONS
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat.style}
                    component="p"
                    variant="body1"
                    sx={{ fontSize: 15, lineHeight: 2 }}
                  >
                    We aim to bring timeless traditions to life through flavors
                    and artistry as spirited as true love itself. Inspired by
                    timeless cultural traditions like the beautiful mendhi
                    ceremony, we blend cultural influences and modern artistry
                    in multi-tiered confections as lavish as they are
                    meaningful.
                  </Typography>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/showcase/asian">
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
                        src="/asian_portfolio_2.jpg"
                        alt="cake"
                        priority
                        fill
                        placeholder="blur"
                        blurDataURL="/asian_portfolio_2.jpg"
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
