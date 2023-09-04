"use client";
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";

export const pages = [
  {
    id: 1,
    name: "ABOUT US",
    url: "/about",
    items: null,
  },
  {
    id: 2,
    name: "OUR SHOWCASE",
    url: "/portfolio",
    items: null,
  },
  {
    id: 3,
    name: "OCCASIONS",
    items: [
      {
        id: 1,
        name: "WEDDINGS",
        url: "/weddings",
      },
      {
        id: 2,
        name: "BIRTHDAYS",
        url: "/birthdays",
      },
      {
        id: 3,
        name: "SPECIAL OCCASIONS",
        url: "/occasions",
      },
      {
        id: 4,
        name: "ASIAN",
        url: "/asian",
      },
    ],
  },
  {
    id: 4,
    name: "REQUEST A QUOTE",
    url: "/quote",
    items: null,
  },
];
export const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    fontWeight: "700px",

    "&, & .MuiListItemText-primary": {
      color: "#E5CB72",
      backgroundColor: "transparent",
    },
  },
});
