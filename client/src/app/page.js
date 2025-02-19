"use client";

import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About"
import Project from "./components/project/Project"
import Techstack from "./components/techstack/Teckstack"
import Github from "./components/github/Github"
import Footer from "./components/footer/Footer"

const AppContainer = styled.div`
  background-color: #1e1e1e; /* Match the background color of the hero section */
  min-height: 100vh;
  padding: 15px 0;
`;

const MainContent = styled.div``;

export default function Home() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Hero />
        <About />
        <Project />
        <Techstack />
        <Github />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
