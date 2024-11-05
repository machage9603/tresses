"use client";
import React from "react";
import { HeroParallax } from "../components/hero-parallax";
import Head from "next/head";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>OmariShots | Portfolio</title>
        <meta name="description" content="Discover our stunning photography collection capturing moments, emotions, and stories through the lens." />
      </Head>

      <Navbar />
      <HeroParallax products={products} />
    </>
  );
}


export const products = [
  {
    title: "Urban Landscapes",
    link: "/portfolio/urban",
    thumbnail: "/uone.jpg",
  },
  {
    title: "Portrait Collection",
    link: "/portfolio/portraits",
    thumbnail: "/pone.jpg",
  },
  {
    title: "Nature Series",
    link: "/portfolio/nature",
    thumbnail: "/none.jpg",
  },
  {
    title: "Street Photography",
    link: "/portfolio/street",
    thumbnail: "/sone.jpg",
  },
  {
    title: "Architecture",
    link: "/portfolio/architecture",
    thumbnail: "/aone.jpg",
  },
  {
    title: "Black & White",
    link: "/portfolio/blackandwhite",
    thumbnail: "/bone.jpg",
  },
  {
    title: "Fashion",
    link: "/portfolio/fashion",
    thumbnail: "/fone.jpg",
  },
  {
    title: "Travel",
    link: "/portfolio/travel",
    thumbnail: "/tone.jpg",
  },
  {
    title: "Minimalist",
    link: "/portfolio/minimalist",
    thumbnail: "/mone.jpg",
  },
  {
    title: "Events",
    link: "/portfolio/events",
    thumbnail: "/eone.jpg",
  },
  {
    title: "Fine Art",
    link: "/portfolio/fineart",
    thumbnail: "/faone.jpg",
  },
  {
    title: "Food",
    link: "/portfolio/food",
    thumbnail: "/foodone.jpg",
  },
  {
    title: "Models",
    link: "/portfolio/models",
    thumbnail: "/mdone.jpg",
  },
  {
    title: "Studio",
    link: "/portfolio/studio",
    thumbnail: "/stone.jpg",
  }

];