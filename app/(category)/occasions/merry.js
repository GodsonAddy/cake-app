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

export default function MerryCelebrations() {
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
                      INTIMATE AND MERRIEST GATHERINGS
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
                    At T&B Cake Craft, life&apos;s sweetest moments inspire our
                    artistry - from Valentine&apos;s Day romance to Christmas
                    joy, graduation milestones and career achievements. We offer
                    indulgent occasion cakes designed to dazzle guests and echo
                    the beauty of cherished memories in the making. Creating
                    unforgettable cake for life&apos;s most cherished
                    celebrations.
                  </Typography>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/showcase/occasions">
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
                    height: 600,
                  }}
                >
                  <Card component="li" sx={{ width: "100%" }}>
                    <CardCover>
                      <Image
                        src="/intimate_merry.png"
                        alt="cake"
                        priority
                        fill
                        placeholder="blur"
                        blurDataURL="/intimate_merry.png"
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
