"use client";
import React, { useState, useRef } from "react";
import { Box, Grid, Typography, Container, Button, Link } from "@mui/material";
import { montserrat, montserrat500, cinzel, cinzel700 } from "./font";
import Image from "next/image";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { Card, CardCover } from "@mui/joy";
import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const buttoncase = [
  {
    id: 1,
    text: "BIRTHDAY CAKES",
    label: "birthdays",
    description:
      " For the most special people in your life, only the most luxurious and elegant of birthday cakes will do. We specialize in opulent, custom creations to honor your nearest and dearest in a manner befitting their importance in your world. For your most treasured relationships, accept nothing less than the finest.",
    title: "CELEBRATING MILESTONES",
    src: "/Happy_Birthday.png",
  },
  {
    id: 2,
    text: "WEDDING CAKES",
    label: "weddings",
    description:
      "For the most precious moment of your wedding day, you can trust us to create a custom wedding cake that transforms your cake cutting into a vision of luxury and wonderment, elevating it into your life's most cherished memory. Our cakes transform special moments into lavish memories",
    title: "A SWEET JOURNEY BEGINS",
    src: "/wedding_cake_3.png",
  },
  {
    id: 3,
    text: "ASIAN CAKES",
    label: "asian",
    description:
      "We offer bespoke Asian wedding cakes crafted to match its grandeur and magnificence. We work intimately with you to fashion a bespoke wedding cake of such vision and opulence, it could only be meant for you. Each cake is a sublime tribute to cultural traditions, giving you an authentic yet elegant taste experience.",
    title: " A TASTE OF THE EXOTIC",
    src: "/asian_finest.png",
  },
  {
    id: 4,
    text: "OCCASIONS",
    label: "occasions",
    description:
      "We understand last-minute events often leave little opportunity to ordain culinary spectacle worthy of the milestone ahead. Trust in our artistry to transform each special occasion into a delightful experience. Our confections will grace your gathering with memories more lavish than you dared dream",
    title: "LIFE'S SWEETEST MOMENTS",
    src: "/seasonal_occasions.png",
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function LuxuryCategories() {
  const [selectedButton, setSelectedButton] = useState("birthdays");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const scrollRef = useRef(null);

  function renderButtonText(text) {
    setSelectedButton(text);
    setIsLoaded(true);
    setIsInView(true);
  }

  const parentVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const child1Variant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      //  transition: {
      //    delay: 1,

      //  },
    },
  };

  const child2Variant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Box mt={15} sx={{ backgroundColor: "#EDE9E9", py: 10 }}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <motion.div
            variants={parentVariant}
            animate="visible"
            initial="hidden"
          >
            <Grid container display="flex" flexDirection="column">
              <motion.div variants={child1Variant}>
                <Grid item>
                  <Typography
                    style={cinzel.style}
                    sx={{
                      textAlign: { xs: "left", lg: "center" },
                      fontSize: 40,
                      lineHeight: { xs: 1.5, sm: 1 },
                    }}
                    variant="h1"
                    component="h1"
                  >
                    WHERE LUXURY MEETS SIMPLICITY
                  </Typography>
                </Grid>
              </motion.div>
              <motion.div variants={child2Variant}>
                <Grid item mt={5}>
                  <Grid
                    container
                    display="flex"
                    alignItems={{ xs: "center", sm: "flex-start" }}
                    justifyContent={{ xs: "center", sm: "space-around" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                    spacing={1}
                  >
                    {buttoncase.map(({ id, label, text }) => {
                      return (
                        <Grid item key={id}>
                          <Button
                            variant="text"
                            color={
                              selectedButton === label ? "primary" : "tertiary"
                            }
                            sx={{
                              textDecoration: "underline",
                              fontSize: 12,
                            }}
                            style={cinzel700.style}
                            onClick={() => {
                              renderButtonText(label);
                              setIsLoaded(true);
                            }}
                            // onLoad={() => setIsLoaded(true)}
                          >
                            {text}
                            {""}
                            {/* {selectedButton === label ? (
                          <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
                        ) : (
                          <SouthEastRoundedIcon sx={{ fontSize: 15 }} />
                        )} */}
                            <motion.div className="underline" layoutId={label}>
                              {selectedButton === label ? (
                                <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
                              ) : (
                                <SouthEastRoundedIcon sx={{ fontSize: 15 }} />
                              )}
                            </motion.div>
                          </Button>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>

                <main style={{ marginTop: 20 }}>
                  <AnimatePresence mode="wait">
                    {buttoncase.map(
                      ({ id, label, text, description, title, src }) => {
                        return (
                          <motion.div
                            key={id}
                            initial={false}
                            animate={
                              isLoaded && isInView && selectedButton === label
                                ? {
                                    WebkitMaskImage: visibleMask,
                                    maskImage: visibleMask,
                                  }
                                : {
                                    WebkitMaskImage: hiddenMask,
                                    maskImage: hiddenMask,
                                  }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: false }}
                            onViewportEnter={() => setIsInView(true)}
                          >
                            {/* <Grid item key={id}> */}
                            {selectedButton === label && (
                              <Grid
                                container
                                display="flex"
                                alignItems={{ xs: "center", lg: "flex-start" }}
                                justifyContent={{
                                  xs: "center",
                                  lg: "space-around",
                                }}
                                rowSpacing={2}
                                //sx={{ transition: "0.3s ease" }}
                              >
                                <Grid item xs={12} lg={6}>
                                  <Box
                                    component="ul"
                                    sx={{
                                      display: "flex",
                                      gap: 2,
                                      flexWrap: "wrap",
                                      p: 0,
                                      m: 0,
                                      width: "100%",
                                      height: 450,
                                    }}
                                  >
                                    <Card component="li" sx={{ width: "100%" }}>
                                      <CardCover>
                                        <Image
                                          src={src}
                                          alt="cake"
                                          priority
                                          fill
                                          placeholder="blur"
                                          blurDataURL={src}
                                          onLoad={() => {
                                            setIsLoaded(true);
                                          }}
                                        />
                                      </CardCover>
                                    </Card>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} lg={5} mt={5}>
                                  <Grid
                                    container
                                    display="flex"
                                    flexDirection="column"
                                    mt={{ xs: 0, lg: 2 }}
                                  >
                                    <Grid item>
                                      <Typography
                                        style={cinzel700.style}
                                        variant="h2"
                                        component="h2"
                                        sx={{
                                          fontSize: { xs: 20, sm: 30 },
                                        }}
                                      >
                                        {title}
                                      </Typography>
                                    </Grid>
                                    <Grid item mt={2}>
                                      <Typography
                                        style={montserrat.style}
                                        variant="body1"
                                        component="p"
                                        sx={{
                                          lineHeight: 2,
                                          fontSize: 15,
                                        }}
                                      >
                                        {description}
                                      </Typography>
                                    </Grid>
                                    <Grid item mt={5}>
                                      <NextLink href={`/${label}`}>
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
                                      </NextLink>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            )}
                            {/* </Grid> */}
                          </motion.div>
                        );
                      }
                    )}
                  </AnimatePresence>
                </main>
              </motion.div>
            </Grid>
          </motion.div>
        </Container>
      </Container>
    </Box>
  );
}
