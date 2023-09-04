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

export default function AboutContents() {
  return (
    <Box sx={{ backgroundColor: "#EDE9E9", py: 10 }}>
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
                        src="/cake_bag.png"
                        alt="cake"
                        priority
                        fill
                        placeholder="blur"
                        blurDataURL="/cake_bag.png"
                      />
                    </CardCover>
                  </Card>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} mt={{ xs: 5, lg: 0 }}>
              <Grid
                container
                display="flex"
                rowSpacing={4}
                flexDirection="column"
              >
                <Grid item>
                  <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                    <Typography
                      style={cinzel.style}
                      variant="h1"
                      component="h1"
                      sx={{ fontSize: 40, color: "#69501F" }}
                    >
                      IMAGINATION{" "}
                      <Typography
                        style={cinzel.style}
                        variant="h1"
                        component="span"
                        sx={{ fontSize: 40 }}
                      >
                        KNOWS NO {""}
                        <Typography
                          style={cinzel.style}
                          variant="h1"
                          component="span"
                          sx={{ fontSize: 40, color: "#69501F" }}
                        >
                          BOUNDS
                        </Typography>
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                    <div>
                      <Typography
                        style={cinzel.style}
                        variant="h1"
                        component="h1"
                        sx={{ fontSize: 40, color: "#69501F" }}
                      >
                        IMAGINATION
                      </Typography>
                      <Typography
                        style={cinzel.style}
                        variant="h1"
                        component="h1"
                        sx={{ fontSize: 40 }}
                      >
                        KNOWS NO {""}
                        <Typography
                          style={cinzel.style}
                          variant="h1"
                          component="span"
                          sx={{ fontSize: 40, color: "#69501F" }}
                        >
                          BOUNDS
                        </Typography>
                      </Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat500.style}
                    variant="body1"
                    component="p"
                    sx={{ fontSize: 15, lineHeight: 2 }}
                  >
                    We know cake transcends culture, language and place. Though
                    cultures and customs may differ, the delight of creation is
                    universal. We embrace the opportunity to craft without
                    boundaries
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
