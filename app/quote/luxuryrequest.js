"use client";
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FormLabel, Textarea, Input } from "@mui/joy";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";

export default function LuxuriousRequest() {
  return (
    <Box mt={15} mb={10}>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            rowSpacing={4}
          >
            <Grid item>
              <Typography
                style={cinzel.style}
                color="tertiary"
                variant="h1"
                component="h1"
                sx={{ fontSize: 40 }}
              >
                ENJOY A TASTE OF LUXURY
              </Typography>
            </Grid>
            <Grid item>
              <Grid container display="flex" rowSpacing={2} columnSpacing={8}>
                <Grid item xs={12} sm={6} mb={5}>
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
                    sx={{ fontSize: 15 }}
                    style={montserrat.style}
                  />
                </Grid>
                <Grid item xs={12} sm={6} mb={5}>
                  <FormLabel
                    sx={(theme) => ({
                      "--FormLabel-color":
                        theme.vars.palette.tertiary.plainColor,
                      mb: 2,
                      fontSize: 18,
                    })}
                    style={montserrat500.style}
                  >
                    Event Type
                  </FormLabel>
                  <Input
                    placeholder="Weddings"
                    color="neutral"
                    variant="soft"
                    type="email"
                    required
                    sx={{ fontSize: 15 }}
                    style={montserrat.style}
                  />
                </Grid>
                <Grid item xs={12} sm={6} mb={5}>
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
                    sx={{ fontSize: 15 }}
                    style={montserrat.style}
                  />
                </Grid>
                <Grid item xs={12} sm={6} mb={5}>
                  <FormLabel
                    sx={(theme) => ({
                      "--FormLabel-color":
                        theme.vars.palette.tertiary.plainColor,
                      mb: 2,
                      fontSize: 18,
                    })}
                    style={montserrat500.style}
                  >
                    Any Specifications
                  </FormLabel>
                  <Textarea
                    minRows={3}
                    variant="soft"
                    placeholder="Eg allergies, cake filling, cake size etc."
                    style={montserrat.style}
                    sx={{ fontSize: 15 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormLabel
                    sx={(theme) => ({
                      "--FormLabel-color":
                        theme.vars.palette.tertiary.plainColor,
                      mb: 2,
                      fontSize: 18,
                    })}
                    style={montserrat500.style}
                  >
                    Location
                  </FormLabel>
                  <Input
                    placeholder="Canada"
                    color="neutral"
                    variant="soft"
                    type="email"
                    required
                    sx={{ fontSize: 15 }}
                    style={montserrat.style}
                  />
                </Grid>
                <Grid item xs={12} sm={6} mt={{ xs: 5, sm: 0 }}>
                  <FormLabel
                    sx={(theme) => ({
                      "--FormLabel-color":
                        theme.vars.palette.tertiary.plainColor,
                      mb: 2,
                      fontSize: 18,
                    })}
                    style={montserrat500.style}
                  >
                    Tell us about your dream
                  </FormLabel>
                  <Textarea
                    minRows={3}
                    variant="soft"
                    placeholder="Hi there! I'm looking to order a birthday cake for my husband's 40th birthday party next month. "
                    style={montserrat.style}
                    sx={{ fontSize: 15 }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item mt={2}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  color: "secondary.main",
                  fontSize: 18,
                  width: "18rem",
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
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
