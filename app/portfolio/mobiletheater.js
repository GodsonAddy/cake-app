"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { Card, CardCover } from "@mui/joy";
import {
  asianImages,
  birthdayImages,
  occasionsImages,
  weddingImages,
} from "./util";
import Link from "next/link";
import {
  montserrat,
  montserrat500,
  montserrat600,
  cinzel,
  cinzel700,
} from "../font";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";

export default function MobileTheater({ selectedButton }) {
  return (
    <Box sx={{ display: { xs: "block", sm: "none" }, mt: 5 }}>
      <Box>
        {selectedButton === "wedding" &&
          weddingImages.map(({ img, id, width, height }) => {
            return (
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  p: 0,
                  mt: 2,
                  width: "100%",
                  height: 600,
                }}
                key={id}
              >
                <Card component="li" sx={{ width: "100%" }}>
                  <CardCover sx={{ flexGrow: 1 }}>
                    <Image
                      alt={`wedding portfolio`}
                      // src="/wedding_portfolio_3.png"
                      src={img}
                      priority
                      fill
                      placeholder="blur"
                      blurDataURL={img}
                    />
                  </CardCover>
                </Card>
              </Box>
            );
          })}
      </Box>
      <Box>
        {selectedButton === "occasions" &&
          occasionsImages.map(({ img, id, width, height }) => {
            return (
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  p: 0,
                  mt: 2,
                  width: "100%",
                  height: 600,
                }}
                key={id}
              >
                <Card component="li" sx={{ width: "100%" }}>
                  <CardCover sx={{ flexGrow: 1 }}>
                    <Image
                      alt={`wedding portfolio`}
                      // src="/wedding_portfolio_3.png"
                      src={img}
                      priority
                      fill
                      placeholder="blur"
                      blurDataURL={img}
                    />
                  </CardCover>
                </Card>
              </Box>
            );
          })}
      </Box>
      <Box>
        {selectedButton === "birthday" &&
          birthdayImages.map(({ img, id, width, height }) => {
            return (
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  p: 0,
                  mt: 2,
                  width: "100%",
                  height: 600,
                }}
                key={id}
              >
                <Card component="li" sx={{ width: "100%" }}>
                  <CardCover>
                    <Image
                      alt={`wedding portfolio`}
                      // src="/wedding_portfolio_3.png"
                      src={img}
                      priority
                      fill
                      placeholder="blur"
                      blurDataURL={img}
                    />
                  </CardCover>
                </Card>
              </Box>
            );
          })}
      </Box>
      <Box>
        {selectedButton === "asian" &&
          asianImages.map(({ img, id, width, height }) => {
            return (
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  p: 0,
                  mt: 2,
                  width: "100%",
                  height: 600,
                }}
                key={id}
              >
                <Card component="li" sx={{ width: "100%" }}>
                  <CardCover sx={{ flexGrow: 1 }}>
                    <Image
                      alt={`wedding portfolio`}
                      // src="/wedding_portfolio_3.png"
                      src={img}
                      priority
                      fill
                      placeholder="blur"
                      blurDataURL={img}
                    />
                  </CardCover>
                </Card>
              </Box>
            );
          })}
      </Box>
      <Box mt={3} mr="auto">
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
    </Box>
  );
}
