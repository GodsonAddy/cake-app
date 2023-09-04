"use client";
import React from "react";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { Card, CardCover } from "@mui/joy";
import Image from "next/image";
import {
  asianImages,
  birthdayImages,
  occasionsImages,
  weddingImages,
} from "./util";

export default function CategoryMobileContents() {
  const pathname = usePathname();

  const birthdays = pathname === "/showcase/birthdays";
  const weddings = pathname === "/showcase/weddings";
  const asian = pathname === "/showcase/asian";
  const occasions = pathname === "/showcase/occasions";
  return (
    <Box sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}>
      <Box>
        {weddings &&
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
        {occasions &&
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
        {birthdays &&
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
                <Card component="li" sx={{ width: "100%", height: "100%" }}>
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
        {asian &&
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
    </Box>
  );
}
