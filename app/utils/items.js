"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  montserrat,
  montserrat500,
  cinzel,
  cinzel700,
  montserrat600,
} from "../font";

export const mobileItemData = [
  {
    img: "/asian_cakes_1.png",
    title: "Bed",
    width: 150,
    height: 112,
    text1: "ASIAN CAKES",
    text2: "Menhdi engagement",
    url: "/asian",
  },
  {
    img: "/wedding_cake.png",
    title: "Bed",
    width: 150,
    height: 270,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
  },
  {
    img: "/executive_cake.png",
    title: "Books",
    width: 150,
    height: 270,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
  },
  {
    img: "/special_occasions_2.png",
    title: "Bed",
    width: 150,
    height: 112,
    text1: "SPECIAL OCCASIONS",
    text2: "Birthdays",
    url: "/occasions",
  },
];

export const mobileSMItemData = [
  {
    img: "/asian_cakes_1.png",
    title: "Bed",
    width: 320,
    height: 282,
    text1: "ASIAN CAKES",
    text2: "Menhdi engagement",
    url: "/asian",
  },
  {
    img: "/wedding_cake.png",
    title: "Bed",
    width: 320,
    height: 440,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
  },
  {
    img: "/executive_cake.png",
    title: "Books",
    width: 320,
    height: 440,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
  },
  {
    img: "/special_occasions_2.png",
    title: "Bed",
    width: 320,
    height: 282,
    text1: "SPECIAL OCCASIONS",
    text2: "Birthdays",
    url: "/occasions",
  },
];

export const mobileMDItemData = [
  {
    img: "/asian_cakes_1.png",
    title: "Bed",
    width: 420,
    height: 382,
    text1: "ASIAN CAKES",
    text2: "Menhdi engagement",
    url: "/asian",
  },
  {
    img: "/wedding_cake.png",
    title: "Bed",
    width: 420,
    height: 540,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
  },
  {
    img: "/executive_cake.png",
    title: "Books",
    width: 420,
    height: 540,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
  },
  {
    img: "/special_occasions_2.png",
    title: "Bed",
    width: 420,
    height: 382,
    text1: "SPECIAL OCCASIONS",
    text2: "Birthdays",
    url: "/occasions",
  },
];

export const itemData = [
  {
    img: "/craftmanship_asian.png",
    title: "Bed",
    width: 340,
    height: 231,
    text1: "ASIAN CAKES",
    text2: "Weddings",
    url: "/asian",
    display: false,
  },
  {
    img: "/craftmanship_mendhi.png",
    title: "Bed",
    width: 340,
    height: 545,
    text1: "ASIAN CAKES",
    text2: "Mendhi engagement",
    url: "/asian",
    display: false,
  },
  {
    img: "/craftmanship_wedding.JPG",
    title: "Books",
    width: 340,
    height: 545,
    text1: "WEDDING CAKES",
    text2: "Wedding",
    url: "/weddings",
    display: true,
  },

  {
    img: "/weddings_2.png",
    title: "Books",
    width: 340,
    height: 231,
    text1: "WEDDINGS",
    text2: "7-8 tier cakes",
    url: "/weddings",
    display: false,
  },
  {
    img: "/craftmanship_graduation.png",
    title: "Bed",
    width: 340,
    height: 231,
    text1: "SPECIAL OCCASIONS",
    text2: "Graduation",
    url: "/occasions",
    display: false,
  },
  {
    img: "/craftmanship_seasonal.png",
    title: "Bed",
    width: 340,
    height: 231,
    text1: "SPECIAL OCCASIONS",
    text2: "Birthdays",
    url: "/occasions",
    display: false,
  },
  {
    img: "/craftmanship_birthday.png",
    title: "Bed",
    width: 340,
    height: 231,
    text1: "SPECIAL OCCASIONS",
    text2: "Birthdays",
    url: "/birthdays",
    display: false,
  },
];

export const testimonialImages = [
  {
    id: 1,
    src: "/testimonials_1.png",
  },
  {
    id: 2,
    src: "/testimonials_1.png",
  },
  {
    id: 3,
    src: "/testimonials_1.png",
  },
  {
    id: 4,
    src: "/testimonials_1.png",
  },
];

export const testimonialTexts = [
  {
    id: 1,
    by: "Donna",
    testimony:
      "I cannot say enough good things about CakeCraft. Their cakes are absolutely divine and every bite is like a flavor explosion in your mouth. They created the perfect cake for my wedding day and it was everything I could have hoped for and more. Highly recommend.",
    description: "Bride,2022 Abu Dhabi Wedding",
  },
  {
    id: 2,
    by: "John",
    testimony:
      "I cannot say enough good things about CakeCraft. Their cakes are absolutely divine and every bite is like a flavor explosion in your mouth. They created the perfect cake for my wedding day and it was everything I could have hoped for and more. Highly recommend.",
    description: "Bride,2022 Abu Dhabi Wedding",
  },
  {
    id: 3,
    by: "Jane",
    testimony:
      "I cannot say enough good things about CakeCraft. Their cakes are absolutely divine and every bite is like a flavor explosion in your mouth. They created the perfect cake for my wedding day and it was everything I could have hoped for and more. Highly recommend.",
    description: "Bride,2022 Abu Dhabi Wedding",
  },
  {
    id: 4,
    by: "Mary",
    testimony:
      "I cannot say enough good things about CakeCraft. Their cakes are absolutely divine and every bite is like a flavor explosion in your mouth. They created the perfect cake for my wedding day and it was everything I could have hoped for and more. Highly recommend.",
    description: "Bride,2022 Abu Dhabi Wedding",
  },
];

export const AnimationHead = ({ text }) => {
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      style={{
        //textAlign: "center",
        fontSize: 40,
      }}
      ref={ref}
    >
      {letters.map((letter, index) => {
        return (
          <motion.Typography
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: index * 0.05 }}
            style={cinzel.style}
          >
            {letter}
          </motion.Typography>
        );
      })}
    </div>
  );
};
