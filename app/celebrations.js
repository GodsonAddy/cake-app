"use client";
import React, { useRef } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { montserrat, montserrat500, cinzel, cinzel700 } from "./font";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { AnimationHead } from "./utils/items";

export default function CakeCelebrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box my={10}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Box sx={{ border: " 0.644248px dashed #69501F", width: "100%" }} />
          <Box mt={10}>
            <Grid
              container
              display="flex"
              spacing={2}
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item xs={12} lg={4}>
                <Grid
                  container
                  display="flex"
                  flexDirection="column"
                  spacing={2}
                >
                  <Grid item>
                    {/* <Typography
                      style={cinzel.style}
                      variant="h1"
                      component="h1"
                      sx={{
                        fontSize: 40,
                        lineHeight: { xs: 1.5 },
                      }}
                    >
                      ELEVATING YOUR CELEBRATIONS
                    </Typography> */}
                    <AnimationHead text="ELEVATING YOUR CELEBRATIONS" />
                  </Grid>
                  <Grid item>
                    <motion.div
                      initial={{ opacity: 0 }}
                      //animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 1 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <Typography
                        sx={{
                          fontSize: 16,
                          lineHeight: 2,
                        }}
                        style={montserrat500.style}
                        component="p"
                        variant="body1"
                        ref={ref}
                      >
                        Experience the profound allure of our crafted cakes.
                        Each serving brings an exquisite touch to your special
                        events - be it weddings, birthdays, or milestones. We
                        are here to make your important moments feel
                        extraordinarily unforgettable.
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item mt={2} mb={{ xs: 3, lg: 0 }} ref={ref}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      //animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 1 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
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
                    </motion.div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box sx={{ display: { xs: "block", lg: "none" } }}>
                  <Box
                    component="ul"
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      p: 0,
                      m: 0,
                      width: "100%",
                      height: 541,
                    }}
                  >
                    <Card component="li" sx={{ width: "100%" }}>
                      <CardCover>
                        <Image
                          src="/elevating_cake.png"
                          alt="cake"
                          priority
                          fill
                          placeholder="blur"
                          blurDataURL="/elevating_cake.png"
                        />
                      </CardCover>
                    </Card>
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", lg: "block" } }} ref={ref}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    <Image
                      src="/elevating_cake.png"
                      alt="cake"
                      priority
                      width={578}
                      height={541}
                      placeholder="blur"
                      blurDataURL="/elevating_cake.png"
                    />
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>

      <Box mt={10} sx={{ display: { xs: "flex", lg: "none" } }}>
        <Container>
          <Box sx={{ border: " 0.644248px dashed #69501F", width: "100%" }} />
        </Container>
      </Box>
    </Box>
  );
}
