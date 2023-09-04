"use client";
import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
  Link,
} from "@mui/material";
import {
  montserrat,
  montserrat500,
  cinzel,
  cinzel700,
  montserrat600,
} from "./font";
import Image from "next/image";
import styles from "./page.module.css";
import {
  itemData,
  mobileItemData,
  mobileMDItemData,
  mobileSMItemData,
} from "./utils/items";
import { motion, useInView } from "framer-motion";

const AnimationHead = ({ text }) => {
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 40,
      }}
      ref={ref}
    >
      {letters.map((letter, index) => {
        return (
          <motion.Typography
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: index * 0.05 }}
            style={cinzel.style}
          >
            {letter}
          </motion.Typography>
        );
      })}
    </div>
  );
};

export default function CakeVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Box sx={{ display: { xs: "flex", lg: "none" }, mt: 10 }}>
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignItems={{ sm: "center", xs: "flex-start" }}
              justifyContent={{ sm: "center", xs: "flex-start" }}
            >
              <Grid
                item
                sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}
              >
                <Typography
                  style={cinzel.style}
                  variant="h1"
                  component="h1"
                  sx={{ fontSize: 40 }}
                >
                  YOUR{" "}
                  <Typography
                    style={cinzel.style}
                    variant="h1"
                    component="span"
                    sx={{ color: "#E7BD69", fontSize: 40 }}
                  >
                    VISION
                  </Typography>
                  , OUR CRAFTSMANSHIP
                </Typography>
              </Grid>
              <Grid item sx={{ display: { xs: "flex", sm: "none" } }}>
                <Typography
                  style={cinzel.style}
                  variant="h1"
                  component="h1"
                  sx={{ fontSize: 40 }}
                >
                  YOUR{" "}
                  <Typography
                    style={cinzel.style}
                    variant="h1"
                    component="span"
                    sx={{ color: "#E7BD69", fontSize: 40 }}
                  >
                    VISION
                  </Typography>
                  ,
                </Typography>
              </Grid>
              <Grid item sx={{ display: { xs: "flex", sm: "none" } }}>
                <Typography
                  style={cinzel.style}
                  variant="h1"
                  component="h1"
                  sx={{ fontSize: 40 }}
                >
                  OUR CRAFTSMANSHIP
                </Typography>
              </Grid>
              <Grid item mt={1}>
                <Typography
                  style={montserrat.style}
                  variant="body1"
                  component="p"
                  sx={{
                    fontSize: 15,
                  }}
                >
                  We seamlessly weave your dreams into our artistry, creating
                  bespoke cakes that exude elegance and captivate your guests.
                </Typography>
              </Grid>

              <Grid item mt={5}>
                <Box
                  sx={{ height: "100%", display: { xs: "flex", sm: "none" } }}
                >
                  <ImageList variant="masonry" cols={2} gap={16}>
                    {mobileItemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <Image
                          src={`${item.img}`}
                          width={item.width}
                          height={item.height}
                          alt={item.title}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={`${item.img}`}
                        />

                        <ImageListItemBar
                          title={
                            <Button
                              style={cinzel700.style}
                              sx={{ fontSize: 10 }}
                            >
                              {item.text1}
                            </Button>
                          }
                          subtitle={
                            <Typography
                              style={montserrat.style}
                              sx={{ fontSize: 8 }}
                            >
                              {item.text2}
                            </Typography>
                          }
                          position="below"
                          sx={{ pt: 0 }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    display: { xs: "none", sm: "flex", md: "none" },
                  }}
                >
                  <ImageList variant="masonry" cols={2} gap={16}>
                    {mobileSMItemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <Image
                          src={`${item.img}`}
                          width={item.width}
                          height={item.height}
                          alt={item.title}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={`${item.img}`}
                        />

                        <ImageListItemBar
                          title={
                            <Link
                              href={item.url}
                              underline="hover"
                              sx={{ color: "#000" }}
                            >
                              <Typography
                                style={cinzel700.style}
                                sx={{ fontSize: 18 }}
                                color="tertiary"
                              >
                                {item.text1}
                              </Typography>
                            </Link>
                          }
                          subtitle={
                            <Typography
                              style={montserrat.style}
                              sx={{ fontSize: 15 }}
                            >
                              {item.text2}
                            </Typography>
                          }
                          position="below"
                          sx={{ pt: 0 }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    display: { xs: "none", md: "flex", lg: "none" },
                  }}
                >
                  <ImageList variant="masonry" cols={2} gap={24}>
                    {mobileMDItemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <Image
                          src={`${item.img}`}
                          width={item.width}
                          height={item.height}
                          alt={item.title}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={`${item.img}`}
                        />

                        <ImageListItemBar
                          title={
                            <Link
                              href={item.url}
                              underline="hover"
                              sx={{ color: "#000" }}
                            >
                              <Typography
                                style={cinzel700.style}
                                sx={{ fontSize: 18 }}
                                color="tertiary"
                              >
                                {item.text1}
                              </Typography>
                            </Link>
                          }
                          subtitle={
                            <Typography
                              style={montserrat.style}
                              sx={{ fontSize: 15 }}
                            >
                              {item.text2}
                            </Typography>
                          }
                          position="below"
                          sx={{ pt: 0 }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" }, mt: 15 }}>
            <Grid container display="flex" flexDirection="column">
              <Grid item>
                <AnimationHead text={" YOUR VISION, OUR CRAFTSMANSHIP"} />
              </Grid>
              <Grid item>
                <div style={montserrat500.style} ref={ref}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1.7, duration: 1 }}
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                    }}
                  >
                    We seamlessly weave your dreams into our artistry, creating
                    bespoke cakes that
                  </motion.p>
                </div>
              </Grid>
              <Grid item>
                <div style={montserrat500.style} ref={ref}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1.7, duration: 1 }}
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                    }}
                  >
                    exude elegance and captivate your guests.
                  </motion.p>
                </div>
              </Grid>
              <Grid item mt={5}>
                <Box sx={{ height: "100%", overflow: "hidden" }} ref={ref}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    <ImageList
                      variant="masonry"
                      cols={3}
                      gap={8}
                      sx={{ height: "100%", overflow: "hidden" }}
                    >
                      {itemData.map((item) => {
                        return (
                          <ImageListItem key={item.img}>
                            {item.display ? (
                              <Box className={styles.image_container}>
                                <Image
                                  src={`${item.img}`}
                                  width={item.width}
                                  height={item.height}
                                  alt={item.title}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL={`${item.img}`}
                                  style={{ borderRadius: 5 }}
                                  className={styles.image_list}
                                />
                                <Box className={styles.overlay}>
                                  <Link href="/quote" underline="none">
                                    <Button
                                      variant="outlined"
                                      className={styles.hover_button}
                                      style={montserrat600.style}
                                      color="tertiary"
                                      sx={{
                                        fontWeight: "bolder",
                                        display: "none",
                                      }}
                                    >
                                      Request A Quote
                                    </Button>
                                  </Link>
                                </Box>
                              </Box>
                            ) : (
                              // <main>
                              <motion.main
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <Image
                                  src={`${item.img}`}
                                  width={item.width}
                                  height={item.height}
                                  alt={item.title}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL={`${item.img}`}
                                  style={{ borderRadius: 5 }}
                                  //className={styles.other_images}
                                  // whileHover={{ scale: 1.1 }}
                                  // transition={{
                                  //   type: "spring",
                                  //   stiffness: 400,
                                  //   damping: 10,
                                  // }}
                                />
                              </motion.main>
                            )}
                            <ImageListItemBar
                              title={
                                <Link
                                  href={item.url}
                                  underline="hover"
                                  sx={{ color: "#000" }}
                                >
                                  <Typography
                                    style={cinzel700.style}
                                    sx={{ fontSize: 18 }}
                                    color="tertiary"
                                  >
                                    {item.text1}
                                  </Typography>
                                </Link>
                              }
                              subtitle={
                                <Typography style={montserrat.style}>
                                  {item.text2}
                                </Typography>
                              }
                              position="below"
                              sx={{ pt: 0 }}
                            />
                          </ImageListItem>
                        );
                      })}
                    </ImageList>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
