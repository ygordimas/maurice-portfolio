import TorusCanvas from "@/components/Canvas";
import Hero from "@/components/Hero";
import SpinningTorus from "@/components/SpinningTorus";
import Title from "@/components/Title";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import About from "@/components/About";
import Header from "@/components/Header";
import Subtitle from "@/components/Subtitle";
import Scene from "@/components/Scene";

import dynamic from "next/dynamic";

const DynamicScene = dynamic(() => import("../components/header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-full font-bebasNeue">
      <Header />
      <section className="w-screen h-screen relative  box-border">
        <Scene />
        <Title />
        <Subtitle />
      </section>
      <section className="w-screen">
        <About />
      </section>
      <section className="w-screen h-screen relative">
        <Hero />
      </section>
    </main>
  );
}
