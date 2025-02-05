'use client'

import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const AppContainer = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
  padding: 20px 0;
`;

export default function Home() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}
