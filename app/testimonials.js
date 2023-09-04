"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import { montserrat, montserrat500, cinzel, cinzel700 } from "./font";
import Image from "next/image";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { A11y, Navigation, Controller } from "swiper/modules";
import "./globals.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  AnimationHead,
  testimonialImages,
  testimonialTexts,
} from "./utils/items";
import { Card, CardCover } from "@mui/joy";

export default function CakeTestimonials() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            display="flex"
            spacing={2}
            justifyContent={{ xs: "center", lg: "space-between" }}
            alignItems="center"
          >
            <Grid item xs={12} lg={5}>
              <Grid
                container
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems={{ xs: "flex-start", lg: "center" }}
              >
                <Grid item mb={5} ml={{ xs: 0, sm: 7, lg: -7 }}>
                  {/* <Typography
                    style={cinzel.style}
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: 25, sm: 40 },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    TESTIMONIALS
                  </Typography> */}
                  <AnimationHead text="TESTIMONIALS" />
                </Grid>
                <Grid
                  item
                  sx={{ display: { xs: "flex", lg: "none" }, mb: 3 }}
                  xs={12}
                >
                  <Swiper
                    className="mySwiper"
                    spaceBetween={100}
                    modules={[Navigation, A11y, Controller]}
                    controller={{ control: controlledSwiper }}
                  >
                    <SwiperButtonPrev>
                      <ArrowBackIosNewRoundedIcon />
                    </SwiperButtonPrev>
                    <SwiperButtonNext>
                      <ArrowForwardIosRoundedIcon />
                    </SwiperButtonNext>
                    {testimonialImages.map((image) => {
                      return (
                        <SwiperSlide key={image.id}>
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
                                  src={image.src}
                                  fill
                                  alt={`testimonial-cake-${image.id}`}
                                  priority
                                  placeholder="blur"
                                  blurDataURL={image.src}
                                />
                              </CardCover>
                            </Card>
                          </Box>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Grid>

                <Swiper
                  className="mySwiper"
                  modules={[Navigation, A11y, Controller]}
                  onSwiper={setControlledSwiper}
                >
                  {testimonialTexts.map((text) => {
                    return (
                      <Grid item key={text.id}>
                        <SwiperSlide>
                          <Grid container display="flex" flexDirection="column">
                            <Grid item>
                              <FormatQuoteRoundedIcon
                                sx={{ color: "primary.main", fontSize: 40 }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body1"
                                //component="p"
                                sx={{
                                  fontSize: 15,
                                  lineHeight: 2,
                                  color: "primary.main",
                                }}
                                style={montserrat500.style}
                              >
                                {text.testimony}
                              </Typography>
                            </Grid>
                            <Grid item mt={3}>
                              <Typography
                                sx={{
                                  color: "primary.main",
                                  lineHeight: 1.5,
                                  fontSize: 18,
                                }}
                                style={cinzel.style}
                                variant="body2"
                                component="p"
                              >
                                {text.by}
                              </Typography>
                            </Grid>
                            <Grid item mt={0}>
                              <Typography
                                style={cinzel.style}
                                variant="body2"
                                component="p"
                                sx={{ lineHeight: 1.5, fontSize: 15 }}
                              >
                                {text.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </SwiperSlide>
                      </Grid>
                    );
                  })}
                </Swiper>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Swiper
                className="mySwiper"
                //effect="cards"
                grabCursor={true}
                modules={[Navigation, A11y, Controller]}
                controller={{ control: controlledSwiper }}
                spaceBetween={100}
              >
                <SwiperButtonPrev>
                  <ArrowBackIosNewRoundedIcon />
                </SwiperButtonPrev>
                <SwiperButtonNext>
                  <ArrowForwardIosRoundedIcon />
                </SwiperButtonNext>
                {testimonialImages.map((image) => {
                  return (
                    <SwiperSlide key={image.id}>
                      <Image
                        src={image.src}
                        width={445}
                        height={475}
                        alt={`testimonial-cake-${image.id}`}
                        priority
                        placeholder="blur"
                        blurDataURL={image.src}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  const isActive = swiper.activeIndex !== swiper.slides.length - 1;

  return (
    <IconButton
      sx={{
        backgroundColor: isActive ? "primary.main" : "grey",
        color: "secondary.main",
        "&:hover": {
          backgroundColor: isActive ? "primary.main" : "grey",
          color: "secondary.main",
        },
        borderRadius: 0,
      }}
      onClick={() => {
        swiper.slideNext();
      }}
      //className="swiper-button-next"
    >
      {children}
    </IconButton>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  const isActive = swiper.activeIndex !== 0;

  return (
    <IconButton
      sx={{
        backgroundColor: "grey",
        color: "secondary.main",
        "&:hover": {
          backgroundColor: "grey",
          color: "secondary.main",
        },
        borderRadius: 0,
      }}
      onClick={() => {
        swiper.slidePrev();
      }}
      //className="swiper-button-prev"
    >
      {children}
    </IconButton>
  );
};
