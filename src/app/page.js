"use client";

import TorusCanvas from "@/components/Canvas";
import Hero from "@/components/Hero";
import SpinningTorus from "@/components/SpinningTorus";
import Title from "@/components/Title";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Subtitle from "@/components/Subtitle";
import Scene from "@/components/Scene";
import Portfolio from "@/components/Portfolio";

import dynamic from "next/dynamic";
import SlidingGallery from "@/components/SlidingGallery";
import Exhibitions from "@/components/Exhibitions";
import ArtworkProvider from "@/context/ArtworkProvider";
import { useState } from "react";
import Mailing from "@/components/Mailing";
import Footer from "@/components/Footer";
import ArtworkModal from "@/components/ArtworkModal";

const DynamicScene = dynamic(() => import("../components/Scene"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <ArtworkProvider>
      <main className="w-full h-full font-bebasNeue overflow-x-hidden relative">
        <Navbar />
        <section className="w-full h-screen relative ">
          <DynamicScene />
        </section>

        <About />

        <Portfolio />

        {/* <SlidingGallery  /> */}

        <Exhibitions />

        <Mailing />

        <Footer />
      </main>
    </ArtworkProvider>
  );
}
