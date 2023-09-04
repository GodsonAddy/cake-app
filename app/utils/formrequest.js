"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  SvgIcon,
  IconButton,
} from "@mui/material";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TiktokIcon from "../../public/tiktok.svg";

import { FormControl, FormLabel, Input, Textarea } from "@mui/joy";

export default function FormRequest() {
  return (
    <Box pt={10} id="contacts">
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
              <Grid
                container
                display="flex"
                //rowSpacing={4}
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Grid item>
                  <Typography
                    style={cinzel.style}
                    component="h2"
                    variant="h2"
                    sx={{ fontSize: 30 }}
                  >
                    Bite into more
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={montserrat.style}
                    sx={{ fontSize: 15 }}
                    component="p"
                    variant="body1"
                  >
                    Your cake adventure continues, this way...
                  </Typography>
                </Grid>
                <Grid item mt={4} xs={12}>
                  <Grid
                    container
                    display="flex"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={2}>
                      <LocalPhoneRoundedIcon color="primary" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={montserrat500.style}
                        sx={{ fontSize: 20 }}
                        variant="body2"
                      >
                        07733 125048
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    display="flex"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={1}>
                      <LocationOnRoundedIcon color="primary" />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography
                        style={montserrat500.style}
                        sx={{ fontSize: 20 }}
                        variant="body2"
                      >
                        90 Stevenson Road, S9 3XG
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item mt={4}>
                  <Grid container display="flex" spacing={0}>
                    <Grid item>
                      <IconButton
                        sx={{
                          color: "tertiary.main",
                        }}
                        href="https://www.tiktok.com/"
                        target="_blank"
                      >
                        <SvgIcon
                          component={TiktokIcon}
                          inheritViewBox
                          fontSize="large"
                        />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        sx={{
                          color: "tertiary.main",
                        }}
                        href=" https://www.facebook.com/"
                        target="_blank"
                      >
                        <FacebookRoundedIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        sx={{
                          color: "tertiary.main",
                        }}
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <InstagramIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Form */}
            <Grid item xs={12} lg={6} mt={{ xs: 5, lg: 0 }}>
              <Grid
                container
                display="flex"
                rowSpacing={4}
                flexDirection="column"
              >
                <Grid item>
                  <form>
                    <FormControl>
                      <Box>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.tertiary.plainColor,
                            mb: 2,
                            fontSize: 18,
                          })}
                          style={montserrat500.style}
                        >
                          Full Name
                        </FormLabel>
                        <Input
                          placeholder="Ex. janedoe"
                          color="neutral"
                          variant="soft"
                          type="name"
                          required
                          sx={{ mb: 5 }}
                          style={montserrat.style}
                        />
                      </Box>
                      <Box>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.tertiary.plainColor,
                            mb: 2,
                            fontSize: 18,
                          })}
                          style={montserrat500.style}
                        >
                          Email
                        </FormLabel>
                        <Input
                          placeholder="Ex. name@domain.com"
                          color="neutral"
                          variant="soft"
                          type="email"
                          required
                          sx={{ mb: 5 }}
                          style={montserrat.style}
                        />
                      </Box>
                      <Box>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.tertiary.plainColor,
                            mb: 2,
                            fontSize: 18,
                          })}
                          style={montserrat500.style}
                        >
                          Message
                        </FormLabel>
                        <Textarea
                          minRows={3}
                          variant="soft"
                          placeholder="Write your text here"
                          style={montserrat.style}
                        />
                      </Box>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "secondary.main",
                          fontSize: 18,
                          // width: "18rem",
                          // justifyContent: "flex-start",
                          mt: 5,
                          "&:hover": {
                            backgroundColor: "tertiary.main",
                            color: "secondary.main",
                          },
                        }}
                        style={montserrat.style}
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
