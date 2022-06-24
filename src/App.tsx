import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./App.styles";
import { SideNav } from "./components/side-nav/SideNav";
import { Rockets } from "./views/rockets/Rockets";
import { History } from "./views/history/History";
import {
  BASE_ROUTE,
  ROCKETS_ROUTE,
  HISTORY_ROUTE,
} from "./routes/app-routes-constants";
import { Main } from "./components/main/Main";
import { Header } from "./components/header/Header";
import { Home } from "./views/home/Home";
import { ErrorView } from "./views/error/ErrorView";

const App = () => {
  return (
    <Router>
      <S.AppBox>
        <SideNav />
        <Header />
        <Main>
          <Routes>
            <Route path={BASE_ROUTE} element={<Home />} />
            <Route path={ROCKETS_ROUTE} element={<Rockets />} />
            <Route path={HISTORY_ROUTE} element={<History />} />
            <Route path="*" element={<ErrorView />} />
          </Routes>
        </Main>
      </S.AppBox>
    </Router>
  );
};

export default App;
