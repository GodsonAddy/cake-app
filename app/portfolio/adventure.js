"use client";
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";
import Link from "next/link";

export default function PortfolioAdventure() {
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
                      style={cinzel700.style}
                      variant="h1"
                      component="h1"
                      sx={{ fontSize: 40, color: "#69501F" }}
                    >
                      ADVENTURE{" "}
                      <Typography
                        style={cinzel700.style}
                        variant="h1"
                        component="span"
                        sx={{ fontSize: 40 }}
                      >
                        AWAITS WITH{" "}
                      </Typography>
                      <Typography
                        style={cinzel700.style}
                        variant="h1"
                        component="span"
                        sx={{ fontSize: 40 }}
                      >
                        EACH{" "}
                      </Typography>
                      <Typography
                        style={cinzel700.style}
                        variant="h1"
                        component="span"
                        sx={{ fontSize: 40, color: "#69501F" }}
                      >
                        SLICE
                      </Typography>
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat500.style}
                    variant="body1"
                    component="h1"
                    sx={{ fontSize: 15, lineHeight: 2 }}
                  >
                    Suspend reality for a bite of the unimaginable made
                    scrumptious. Life&apos;s too silly not to indulge in
                    adventures handcrafted to delight inner child&apos;s wildest
                    notions
                  </Typography>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/quote">
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
                      Request a quote
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} mt={{ xs: 7, lg: 0 }}>
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
                        src="/adventure_cake.JPG"
                        alt="cake"
                        priority
                        fill
                        placeholder="blur"
                        blurDataURL="/adventure_cake.JPG"
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
