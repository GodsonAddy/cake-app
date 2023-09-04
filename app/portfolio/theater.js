"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Link,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";
import Image from "next/image";
import {
  asianImages,
  birthdayImages,
  occasionsImages,
  weddingImages,
} from "./util";
import MobileTheater from "./mobiletheater";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";

export default function PortfolioTheater() {
  const [selectedButton, setSelectedButton] = useState("birthday");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleImageClose = () => {
    setOpen(false);
  };
  function renderButtonText(text) {
    setSelectedButton(text);
  }
  return (
    <Box my={10}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Grid item>
              <div>
                <Typography
                  style={cinzel700.style}
                  sx={{ fontSize: 40 }}
                  variant="h1"
                  component="h1"
                >
                  WHERE{" "}
                  <Typography
                    style={cinzel700.style}
                    sx={{ fontSize: 40 }}
                    component="span"
                    color="#69501F"
                    variant="h1"
                  >
                    CAKES{" "}
                  </Typography>{" "}
                  BECOME{" "}
                  <Typography
                    style={cinzel700.style}
                    sx={{ fontSize: 40 }}
                    color="#69501F"
                    variant="h1"
                    component="span"
                  >
                    THEATER
                  </Typography>
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <Typography
                style={montserrat500.style}
                sx={{ fontSize: 15 }}
                variant="body1"
                component="p"
              >
                We meld imagination, craft, and detail into a cake creation that
                embodies life&apos; special moments.
              </Typography>
            </Grid>

            <Grid item mt={5} xs={12}>
              <Grid
                container
                display="flex"
                justifyContent="space-evenly"
                alignItems="flex-start"
                columnSpacing={2}
                rowSpacing={2}
              >
                <Grid item xs={12} sm={3}>
                  <Link>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: { xs: 10, sm: 12 },
                      }}
                      color={
                        selectedButton === "birthday" ? "primary" : "tertiary"
                      }
                      style={cinzel700.style}
                      onClick={() => renderButtonText("birthday")}
                    >
                      BIRTHDAY CAKES{" "}
                      {selectedButton === "birthday" ? (
                        <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
                      ) : (
                        <SouthEastRoundedIcon sx={{ fontSize: 15 }} />
                      )}
                    </Button>

                    <Divider color="#000" />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Link>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: { xs: 10, sm: 12 },
                      }}
                      color={
                        selectedButton === "wedding" ? "primary" : "tertiary"
                      }
                      style={cinzel700.style}
                      onClick={() => renderButtonText("wedding")}
                    >
                      WEDDING CAKES{" "}
                      {selectedButton === "wedding" ? (
                        <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
                      ) : (
                        <SouthEastRoundedIcon sx={{ fontSize: 15 }} />
                      )}
                    </Button>
                    <Divider color="#000" />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Link>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: { xs: 10, sm: 12 },
                      }}
                      color={
                        selectedButton === "asian" ? "primary" : "tertiary"
                      }
                      style={cinzel700.style}
                      onClick={() => renderButtonText("asian")}
                    >
                      ASIAN CAKES{" "}
                      {selectedButton === "asian" ? (
                        <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
                      ) : (
                        <SouthEastRoundedIcon sx={{ fontSize: 15 }} />
                      )}
                    </Button>
                    <Divider color="#000" />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Link>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: { xs: 10, sm: 12 },
                      }}
                      color={
                        selectedButton === "occasions" ? "primary" : "tertiary"
                      }
                      style={cinzel700.style}
                      onClick={() => renderButtonText("occasions")}
                    >
                      SPECIAL OCCASIONS{" "}
                      {selectedButton === "occasions" ? (
                        <NorthEastRoundedIcon sx={{ fontSize: 15 }} />
                      ) : (
                        <SouthEastRoundedIcon sx={{ fontSize: 15 }} />
                      )}
                    </Button>
                    <Divider color="#000" />
                  </Link>
                </Grid>
              </Grid>
              <Grid item mt={3} sx={{ display: { xs: "none", sm: "flex" } }}>
                <Grid
                  container
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                  rowSpacing={2}
                  columnSpacing={{ xs: 2, md: 12, lg: 2 }}
                >
                  {selectedButton === "birthday" &&
                    birthdayImages.map(({ img, id, width, height }) => {
                      return (
                        <Grid item key={id}>
                          <div onClick={() => handleImageOpen(img)}>
                            <Image
                              alt={`birthdays portfolio - ${id}`}
                              src={img}
                              width={width}
                              height={height}
                              priority
                              style={{ borderRadius: 5, cursor: "pointer" }}
                              placeholder="blur"
                              blurDataURL={img}
                            />
                          </div>
                        </Grid>
                      );
                    })}
                  {selectedButton === "wedding" &&
                    weddingImages.map(({ img, id, width, height }) => {
                      return (
                        <Grid item key={id}>
                          <div onClick={() => handleImageOpen(img)}>
                            <Image
                              alt={`weddings portfolio - ${id}`}
                              src={img}
                              width={width}
                              height={height}
                              priority
                              style={{ borderRadius: 5, cursor: "pointer" }}
                              placeholder="blur"
                              blurDataURL={img}
                            />
                          </div>
                        </Grid>
                      );
                    })}
                  {selectedButton === "asian" &&
                    asianImages.map(({ img, id, width, height }) => {
                      return (
                        <Grid item key={id}>
                          <div onClick={() => handleImageOpen(img)}>
                            <Image
                              alt={`asian portfolio - ${id}`}
                              src={img}
                              width={width}
                              height={height}
                              priority
                              style={{ borderRadius: 5, cursor: "pointer" }}
                              placeholder="blur"
                              blurDataURL={img}
                            />
                          </div>
                        </Grid>
                      );
                    })}
                  {selectedButton === "occasions" &&
                    occasionsImages.map(({ img, id, width, height }) => {
                      return (
                        <Grid item key={id}>
                          <div onClick={() => handleImageOpen(img)}>
                            <Image
                              alt={`occasions portfolio - ${id}`}
                              src={img}
                              width={width}
                              height={height}
                              priority
                              style={{ borderRadius: 5, cursor: "pointer" }}
                              placeholder="blur"
                              blurDataURL={img}
                            />
                          </div>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "flex" } }} mt={2}>
                <Box mr="auto">
                  <Link
                    href={
                      selectedButton === "wedding"
                        ? "/showcase/weddings"
                        : selectedButton === "birthday"
                        ? "/showcase/birthdays"
                        : selectedButton === "asian"
                        ? "/showcase/asian"
                        : "/showcase/occasions"
                    }
                  >
                    <Button
                      style={montserrat.style}
                      color="tertiary"
                      sx={{
                        fontSize: 18,
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "secondary.main",
                        },
                      }}
                      endIcon={<ReadMoreRoundedIcon />}
                    >
                      View Our{" "}
                      {selectedButton === "wedding"
                        ? "Wedding"
                        : selectedButton === "birthday"
                        ? "Birthday"
                        : selectedButton === "asian"
                        ? "Asian"
                        : "Occasions"}{" "}
                      Showcase
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <MobileTheater selectedButton={selectedButton} />
        </Container>
      </Container>

      <Dialog
        onClose={handleImageClose}
        open={open}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.85)",
            },
          },
        }}
      >
        <DialogContent sx={{ padding: 0 }}>
          {selectedImage && (
            <div
              style={{
                backgroundColor: "transparent", // Make the content background transparent
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={selectedImage}
                alt="Selected"
                width={350}
                height={520}
                placeholder="blur"
                blurDataURL={selectedImage}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
