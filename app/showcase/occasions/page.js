"use client";
import React, { useState } from "react";
import { Box, Dialog, DialogContent, Grid } from "@mui/material";
import Image from "next/image";
import { occasionsImages } from "../util";

export default function OccasionsPage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleImageClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <Box>
        <Grid
          container
          display="flex"
          spacing={2}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {occasionsImages.map(({ img, id, width, height }) => {
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
    </Box>
  );
}
