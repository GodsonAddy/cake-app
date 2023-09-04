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
} from "../font";
import { Card, CardCover } from "@mui/joy";
import Link from "next/link";

export default function CakeBoss() {
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
            <Grid item xs={12} lg={6}>
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
                        src="/cake_boss.png"
                        alt="cake"
                        priority
                        fill
                        placeholder="blur"
                        blurDataURL="/cake_boss.png"
                      />
                    </CardCover>
                  </Card>
                </Box>
              </Box>
            </Grid>
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
                      MEET THE{" "}
                      <Typography
                        style={cinzel.style}
                        variant="h1"
                        component="span"
                        sx={{ fontSize: 40, color: "#69501F" }}
                      >
                        CAKE BOSS
                      </Typography>
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat500.style}
                    variant="body1"
                    component="p"
                    sx={{ fontSize: 15, lineHeight: 2 }}
                  >
                    Our visionary founder Temitope Okanlawon, also known as the
                    “Cake Boss” approaches each new design unburdened by
                    constraints of convention or expectation. His devotion to
                    mastering the language of luxury craft has allowed our brand
                    to forge relationships with prestigious partners and events
                    around the globe
                  </Typography>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/portfolio">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "secondary.main",
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
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
