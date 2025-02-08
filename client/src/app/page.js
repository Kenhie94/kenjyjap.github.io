"use client";

import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

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
      </MainContent>
    </AppContainer>
  );
}
