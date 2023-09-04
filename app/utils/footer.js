import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  IconButton,
  SvgIcon,
} from "@mui/material";
import Image from "next/image";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TiktokIcon from "../../public/tiktok.svg";
import Link from "next/link";
import MUILink from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      style={montserrat.style}
      sx={{ fontSize: { xs: 10, sm: 15 }, color: "tertiary.main" }}
    >
      {`${new Date().getFullYear()}| All Rights Reserved.`}

      {"."}
    </Typography>
  );
}

export default function MainFooter() {
  return (
    <Box mt={15} pt={5} sx={{ backgroundColor: "#EDE9E9" }} component="footer">
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Grid container display="flex" flexDirection="column">
            <Grid item mb={5}>
              <Grid
                container
                display="flex"
                columnSpacing={{ xs: 0, sm: 12 }}
                // justifyContent={{ xs: "center", sm: "space-between" }}
                // alignItems="center"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={6}>
                  <Grid
                    container
                    display="flex"
                    //spacing={2}
                    flexDirection="column"
                    justifyContent={{ xs: "center", sm: "flex-start" }}
                    alignItems={{ xs: "center", sm: "flex-start" }}
                  >
                    <Grid item>
                      <Image
                        src="/logo_black.png"
                        width={64}
                        height={69}
                        alt="cake"
                        priority
                        placeholder="blur"
                        blurDataURL="/logo_black.png"
                      />
                    </Grid>
                    <Grid
                      item
                      sx={{ display: { xs: "flex", sm: "none" }, mb: 2 }}
                    >
                      <Grid container display="flex" spacing={0}>
                        <Grid item>
                          <IconButton
                            sx={{
                              color: "tertiary.main",
                            }}
                            href="https://www.tiktok.com/"
                            target="_blank"
                          >
                            <SvgIcon component={TiktokIcon} inheritViewBox />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton
                            sx={{
                              color: "tertiary.main",
                            }}
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <FacebookRoundedIcon />
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
                            <InstagramIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item my={2}>
                      <Typography
                        style={montserrat.style}
                        variant="body2"
                        sx={{
                          lineHeight: 2,
                          color: "tertiary.main",
                          fontSize: {
                            xs: 10,
                            sm: 15,
                          },
                          textAlign: { xs: "center", sm: "left" },
                        }}
                      >
                        We are here to make your important moments feel
                        extraordinarily unforgettable. Trust us to create a cake
                        that exceeds your expectations
                      </Typography>
                    </Grid>
                    <Grid item sx={{ display: { xs: "none", sm: "flex" } }}>
                      <Grid container display="flex" spacing={0}>
                        <Grid item>
                          <IconButton
                            sx={{
                              color: "tertiary.main",
                            }}
                            href="https://www.tiktok.com/"
                            target="_blank"
                          >
                            <SvgIcon component={TiktokIcon} inheritViewBox />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton
                            sx={{
                              color: "tertiary.main",
                            }}
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <FacebookRoundedIcon />
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
                            <InstagramIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3} mt={{ xs: 3, sm: 0 }}>
                  <Grid
                    container
                    display="flex"
                    spacing={2}
                    flexDirection="column"
                    justifyContent={{ xs: "center", sm: "flex-start" }}
                    alignItems={{ xs: "center", sm: "flex-start" }}
                  >
                    <Grid item>
                      <Typography
                        style={montserrat.style}
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: 18, sm: 23 },
                        }}
                        variant="h5"
                        component="h5"
                      >
                        Information
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        display="flex"
                        rowSpacing={{ xs: 1, sm: 2 }}
                        flexDirection="column"
                      >
                        <Grid item>
                          <MUILink href="/about" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              About Us
                            </Typography>
                          </MUILink>
                        </Grid>
                        <Grid item>
                          <MUILink href="/about/#contacts" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Contact Us
                            </Typography>
                          </MUILink>
                        </Grid>
                        <Grid item>
                          <MUILink href="/portfolio" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Showcase
                            </Typography>
                          </MUILink>
                        </Grid>
                        <Grid item>
                          <MUILink href="/training" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Training
                            </Typography>
                          </MUILink>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={3} mt={{ xs: 6, sm: 0 }}>
                  <Grid
                    container
                    display="flex"
                    spacing={2}
                    flexDirection="column"
                    justifyContent={{ xs: "center", sm: "flex-start" }}
                    alignItems={{ xs: "center", sm: "flex-start" }}
                  >
                    <Grid item>
                      <Typography
                        style={montserrat.style}
                        sx={{
                          color: "tertiary.main",
                          fontSize: { xs: 18, sm: 23 },
                        }}
                        variant="h5"
                        component="h5"
                      >
                        Occasions
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        display="flex"
                        rowSpacing={{ xs: 1, sm: 2 }}
                        flexDirection="column"
                      >
                        <Grid item>
                          <MUILink href="/birthdays" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Birthdays
                            </Typography>
                          </MUILink>
                        </Grid>
                        <Grid item>
                          <MUILink href="/weddings" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Weddings
                            </Typography>
                          </MUILink>
                        </Grid>
                        <Grid item>
                          <MUILink href="/occasions" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Special Occasions
                            </Typography>
                          </MUILink>
                        </Grid>
                        <Grid item>
                          <MUILink href="/asian" underline="none">
                            <Typography
                              style={montserrat.style}
                              variant="body2"
                              sx={{
                                fontSize: { xs: 10, sm: 15 },
                                color: "tertiary.main",
                              }}
                            >
                              Asian
                            </Typography>
                          </MUILink>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider color="#000" sx={{ fontWeight: "bolder" }} />
            <Grid item mt={2} mb={5}>
              <Grid
                container
                display="flex"
                rowSpacing={1}
                columnSpacing={2}
                justifyContent={{ sm: "space-between", xs: "center" }}
                alignItems={{ sm: "flex-start", xs: "center" }}
              >
                <Grid item marginTop={0.5}>
                  <Copyright />
                </Grid>
                <Grid>
                  <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <MUILink href="/terms" underline="none">
                        <Button
                          color="tertiary"
                          style={montserrat.style}
                          sx={{ fontSize: { xs: 10, sm: 15 } }}
                        >
                          Terms & Conditions
                        </Button>
                      </MUILink>
                    </Grid>
                    <Grid item>
                      <MUILink href="/privacy-policy" underline="none">
                        <Button
                          color="tertiary"
                          style={montserrat.style}
                          sx={{ fontSize: { xs: 10, sm: 15 } }}
                        >
                          Privacy Policy
                        </Button>
                      </MUILink>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
