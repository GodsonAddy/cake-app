"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Fab,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import HeroBar from "../utils/herobar";
import MainFooter from "../utils/footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../utils/scroller";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";

import { usePathname } from "next/navigation";
import CategoryMobileContents from "./contents";

export default function CakePortfolio({ children }, props) {
  const pathname = usePathname();

  const birthdays = pathname === "/showcase/birthdays";
  const weddings = pathname === "/showcase/weddings";
  const asian = pathname === "/showcase/asian";
  const occasions = pathname === "/showcase/occasions";
  return (
    <Box>
      <CssBaseline />

      <Box>
        <HeroBar />
        <Toolbar id="back-to-top-anchor" />
      </Box>

      <Box mt={10}>
        <Container maxWidth="lg">
          <Container maxWidth="lg">
            <Grid
              container
              display="flex"
              spacing={2}
              justifyContent="space-evenly"
              alignItems="center"
              flexDirection="column"
            >
              <Grid item>
                <Typography
                  sx={{ textAlign: "center", fontSize: 30 }}
                  style={cinzel.style}
                  color="tertiary"
                >
                  {weddings
                    ? "WEDDINGS"
                    : birthdays
                    ? "BIRTHDAYS"
                    : asian
                    ? "ASIAN"
                    : "SPECIAL OCCASIONS"}
                </Typography>
                <Divider color="#000" sx={{ mx: asian ? 3 : 6 }} />
              </Grid>
              <Grid item>
                <Grid
                  container
                  display="flex"
                  columnSpacing={4}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  {!asian && (
                    <Grid item>
                      <Link href="/showcase/asian">
                        <Button
                          style={montserrat.style}
                          sx={{
                            fontSize: 15,
                          }}
                          variant="text"
                          color="tertiary"
                        >
                          ASIAN
                        </Button>
                      </Link>
                    </Grid>
                  )}
                  {!birthdays && (
                    <Grid item>
                      <Link href="/showcase/birthdays">
                        <Button
                          style={montserrat.style}
                          sx={{
                            fontSize: 15,
                          }}
                          variant="text"
                          color="tertiary"
                        >
                          BIRTHDAYS
                        </Button>
                      </Link>
                    </Grid>
                  )}
                  {!occasions && (
                    <Grid item>
                      <Link href="/showcase/occasions">
                        <Button
                          style={montserrat.style}
                          sx={{
                            fontSize: 15,
                          }}
                          variant="text"
                          color="tertiary"
                        >
                          SPECIAL OCCASIONS
                        </Button>
                      </Link>
                    </Grid>
                  )}
                  {!weddings && (
                    <Grid item>
                      <Link href="/showcase/weddings">
                        <Button
                          style={montserrat.style}
                          sx={{
                            fontSize: 15,
                          }}
                          variant="text"
                          color="tertiary"
                        >
                          WEDDINGS
                        </Button>
                      </Link>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              <Grid item mt={2}>
                {children}
              </Grid>
            </Grid>
            {/* <Box mt={2}>{children}</Box> */}
            <CategoryMobileContents />

            <Box mt={10} mr="auto">
              <Link href="/portfolio">
                <Button
                  style={montserrat.style}
                  color="tertiary"
                  sx={{ fontSize: 15 }}
                >
                  BACK TO PORTFOLIO PAGE
                </Button>
              </Link>
            </Box>
          </Container>
        </Container>
      </Box>

      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: "tertiary.main",
            "&:hover": {
              backgroundColor: "tertiary.main",
              color: "secondary.main",
            },
          }}
        >
          <KeyboardArrowUpIcon color="secondary" />
        </Fab>
      </ScrollTop>
      <MainFooter />
    </Box>
  );
}
