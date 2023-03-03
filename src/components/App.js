import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Pages/Contexts/AuthContext";
import HomePage from "./Pages/HomePage/HomePage";
import HomePageLogOff from "./Pages/HomePageLogOff/HomePageLogOff"
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import RankingPage from "./Pages/RankingPage/RankingPage"

export default function App() {
  return (
    <BrowserRouter>
      <Content>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePageLogOff />} />
            <Route path="/tela-inicial" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/ranking" element={<RankingPage />} />
          </Routes>
        </AuthProvider>
      </Content>
    </BrowserRouter>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
`;