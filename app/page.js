"use client";
import React from "react";
import { HeroParallax } from "../components/hero-parallax";
import Head from "next/head";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>IShootBeautifulImages | Photography Portfolio</title>
        <meta name="description" content="Discover our stunning photography collection capturing moments, emotions, and stories through the lens." />
      </Head>

      <Navbar />
      <HeroParallax products={products} />
    </>
  );
}

// Updated products with higher quality images and more photography-focused content
export const products = [
  {
    title: "Urban Landscapes",
    link: "/portfolio/urban",
    thumbnail: "/images/urban-landscape.jpg", // Replace with your actual image path
  },
  {
    title: "Portrait Collection",
    link: "/portfolio/portraits",
    thumbnail: "/images/portraits.jpg",
  },
  {
    title: "Nature Series",
    link: "/portfolio/nature",
    thumbnail: "/images/nature.jpg",
  },
  {
    title: "Street Photography",
    link: "/portfolio/street",
    thumbnail: "/images/street.jpg",
  },
  {
    title: "Architecture",
    link: "/portfolio/architecture",
    thumbnail: "/images/architecture.jpg",
  },
  {
    title: "Black & White",
    link: "/portfolio/blackandwhite",
    thumbnail: "/images/blackandwhite.jpg",
  },
  {
    title: "Fashion",
    link: "/portfolio/fashion",
    thumbnail: "/images/fashion.jpg",
  },
  {
    title: "Abstract",
    link: "/portfolio/abstract",
    thumbnail: "/images/abstract.jpg",
  },
  {
    title: "Travel",
    link: "/portfolio/travel",
    thumbnail: "/images/travel.jpg",
  },
  {
    title: "Minimalist",
    link: "/portfolio/minimalist",
    thumbnail: "/images/minimalist.jpg",
  },
  {
    title: "Commercial",
    link: "/portfolio/commercial",
    thumbnail: "/images/commercial.jpg",
  },
  {
    title: "Events",
    link: "/portfolio/events",
    thumbnail: "/images/events.jpg",
  },
  {
    title: "Fine Art",
    link: "/portfolio/fineart",
    thumbnail: "/images/fineart.jpg",
  },
  {
    title: "Documentary",
    link: "/portfolio/documentary",
    thumbnail: "/images/documentary.jpg",
  },
  {
    title: "Conceptual",
    link: "/portfolio/conceptual",
    thumbnail: "/images/conceptual.jpg",
  }
];