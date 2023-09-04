import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  IconButton,
  Tabs,
  Tab,
  MenuItem,
  Menu,
  AppBar,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "./font";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import HeroBar from "./utils/herobar";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function HeroPage() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [backgroundHomeImage, setBackgroundHomeImage] = useState(
    "/cakecraft_video.MP4"
  );

  function togglePlayPause() {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  }

  function changeBackground(image) {
    setBackgroundHomeImage(image);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        minWidth: "100%",
        minHeight: { xs: "100vh", sm: "100%", md: "100vh" },
        backgroundColor: "tertiary.main",
        position: "relative",
      }}
    >
      {backgroundHomeImage === "/cakecraft_video.MP4" ? (
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            minWidth: "100%",
            maxHeight: "100%",
            position: "absolute",
            opacity: 0.5,
            top: 0,
            left: 0,
          }}
          ref={videoRef}
        >
          <source src={backgroundHomeImage} type="video/mp4" />
        </video>
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundHomeImage})`,
            backgroundSize: "cover",
            opacity: 0.5,
          }}
        />
      )}
      <RenderBackground
        togglePlayPause={togglePlayPause}
        changeBackground={changeBackground}
        value={value}
        handleChange={handleChange}
        isPlaying={isPlaying}
        backgroundHomeImage={backgroundHomeImage}
      />
    </Box>
  );
}

const RenderBackground = ({
  changeBackground,
  togglePlayPause,
  value,
  handleChange,
  isPlaying,
  backgroundHomeImage,
}) => {
  return (
    <Box>
      <HeroBar />
      <Toolbar id="back-to-top-anchor" />

      <Box mt={40} pb={5} sx={{ display: { xs: "none", md: "flex" } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,

              display: "flex",
            }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="tertiary"
            >
              <Tab
                label={
                  <Image
                    src="/logo_white.png"
                    width={135}
                    height={118}
                    alt="logo"
                    priority
                    placeholder="blur"
                    blurDataURL="/logo_white.png"
                  />
                }
                onClick={() => changeBackground("/cakecraft_video.MP4")}
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 18,
                    }}
                    style={montserrat.style}
                    variant="body2"
                  >
                    Seasonal
                  </Typography>
                }
                onClick={() => changeBackground("/banner.png")}
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 18,
                    }}
                    style={montserrat.style}
                    variant="body2"
                  >
                    Weddings
                  </Typography>
                }
                onClick={() => changeBackground("/asian_cakes_2.png")}
                {...a11yProps(2)}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 18,
                    }}
                    style={montserrat.style}
                    variant="body2"
                  >
                    Birthdays
                  </Typography>
                }
                onClick={() => changeBackground("/special_occasions_2.png")}
                {...a11yProps(3)}
              />
            </Tabs>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "secondary.main",
                ml: 15,
                width: 2,

                my: 3,
                display: { xs: "none", sm: "block" },
              }}
            />
            <TabPanel value={value} index={0}>
              <Typography
                sx={{
                  color: "secondary.main",
                  letterSpacing: 10,

                  fontSize: 30,
                  mt: 2,
                }}
                style={cinzel.style}
                variant="h5"
                component="h5"
              >
                CRAFTING
              </Typography>

              <Typography
                sx={{
                  color: "secondary.main",

                  fontSize: 45,
                }}
                style={cinzel.style}
                variant="h5"
                component="h5"
              >
                EXCEPTIONAL
              </Typography>

              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 45,
                }}
                style={cinzel.style}
                variant="h5"
                component="h5"
              >
                CELEBRATIONS
              </Typography>
              <Box sx={{ mt: 2.5 }}>
                <IconButton onClick={togglePlayPause}>
                  {isPlaying ? (
                    <PauseCircleFilledRoundedIcon
                      color="secondary"
                      sx={{ fontSize: 40 }}
                    />
                  ) : (
                    <PlayCircleRoundedIcon
                      color="secondary"
                      sx={{ fontSize: 40 }}
                    />
                  )}
                </IconButton>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography
                sx={{
                  color: "secondary.main",

                  fontSize: 30,
                  mt: 2,
                  textTransform: "none",
                }}
                style={montserrat.style}
                variant="h5"
                component="h5"
              >
                Embracing the essence of each season,
              </Typography>

              <Typography
                sx={{
                  color: "secondary.main",

                  fontSize: 30,
                }}
                style={montserrat.style}
                variant="h5"
                component="h5"
              >
                these delectable cakes weave a table of seasonal splendor,
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 30,
                }}
                style={montserrat.style}
                variant="h5"
                component="h5"
              >
                enchanting taste buds with memories that transcend time.
              </Typography>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 30,
                  mt: 2,
                }}
                style={montserrat.style}
                variant="h5"
                component="h5"
              >
                Sweet Beginninings Last an Eternity
              </Typography>

              <Typography
                sx={{
                  color: "secondary.main",

                  fontSize: 30,
                }}
                style={montserrat.style}
                variant="h5"
                component="h5"
              >
                Our passion remains the same:
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 30,
                }}
                style={montserrat.style}
                variant="h5"
                component="h5"
              >
                to create a work of wonder as eternal as the love it celebrates.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid container display="flex" flexDirection="column">
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 30,
                      mt: 2,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Unforgettable Momments, Forever Cherished.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 30,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Capturing the joy of birthdays,
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 30,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    each slice holds treasured memories that linger in hearts
                    for years to come
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Container>
      </Box>
      {backgroundHomeImage === "/cakecraft_video.MP4" && (
        <Box
          mt={40}
          mb={{ xs: 0, sm: 40, md: 0 }}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Container>
            <Container>
              <Grid
                container
                display="flex"
                flexDirection="column"
                rowSpacing={1}
                // alignItems="center"
                // justifyContent="flex-start"
              >
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      letterSpacing: 6,
                      fontSize: 20,
                    }}
                    style={cinzel.style}
                    variant="h5"
                    component="h5"
                  >
                    CRAFTING
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 38,
                    }}
                    style={cinzel.style}
                    variant="h5"
                    component="h5"
                  >
                    EXCEPTIONAL
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 40,
                    }}
                    style={cinzel.style}
                    variant="h5"
                    component="h5"
                  >
                    CELEBRATIONS
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Box sx={{ mt: 2.5 }}>
                  <IconButton onClick={togglePlayPause}>
                    {isPlaying ? (
                      <PauseCircleFilledRoundedIcon
                        color="secondary"
                        sx={{ fontSize: 40 }}
                      />
                    ) : (
                      <PlayCircleRoundedIcon
                        color="secondary"
                        sx={{ fontSize: 40 }}
                      />
                    )}
                  </IconButton>
                </Box>
              </Grid>
            </Container>
          </Container>
        </Box>
      )}
      {backgroundHomeImage === "/mobile_background.png" && (
        <Box
          mt={40}
          mb={{ xs: 0, sm: 40, md: 0 }}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Container>
            <Container>
              <Grid
                container
                display="flex"
                flexDirection="column"
                rowSpacing={1}
              >
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 20,
                      mt: 2,
                      textTransform: "none",
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Embracing the essence of each season,
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 20,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    these delectable cakes weave a table of seasonal splendor,
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 20,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    enchanting taste buds with memories that transcend time.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Box>
      )}
      {backgroundHomeImage === "/asian_cakes_2.png" && (
        <Box
          mt={40}
          mb={{ xs: 0, sm: 40, md: 0 }}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Container>
            <Container>
              <Grid
                container
                display="flex"
                flexDirection="column"
                rowSpacing={1}
              >
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 20,
                      mt: 2,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Sweet Beginninings Last an Eternity
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 20,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Our passion remains the same:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 20,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    to create a work of wonder as eternal as the love it
                    celebrates.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Box>
      )}

      {backgroundHomeImage === "/special_occasions_2.png" && (
        <Box
          mt={40}
          mb={{ xs: 0, sm: 40, md: 0 }}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Container>
            <Container>
              <Grid
                container
                display="flex"
                flexDirection="column"
                rowSpacing={1}
              >
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 20,
                      mt: 2,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Unforgettable Momments, Forever Cherished.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",

                      fontSize: 20,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    Capturing the joy of birthdays,
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: 20,
                    }}
                    style={montserrat.style}
                    variant="h5"
                    component="h5"
                  >
                    each slice holds treasured memories that linger in hearts
                    for years to come
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Box>
      )}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: "tertiary.main",
          opacity: 0.36,
          py: 2,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container>
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 12,
                }}
                style={montserrat.style}
                variant="body2"
                onClick={() => changeBackground("/cakecraft_video.MP4")}
              >
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 12,
                }}
                style={montserrat.style}
                variant="body2"
                onClick={() => changeBackground("/mobile_background.png")}
              >
                Seasonal
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 12,
                }}
                style={montserrat.style}
                variant="body2"
                onClick={() => changeBackground("/asian_cakes_2.png")}
              >
                Weddings
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: 12,
                }}
                style={montserrat.style}
                variant="body2"
                onClick={() => changeBackground("/special_occasions_2.png")}
              >
                Birthdays
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
