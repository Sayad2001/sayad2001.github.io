import React from "react";
import { Route, Routes as Router } from "react-router-dom";

import FirstPage from "../pages/firs-pages";
import NewsPage from "../pages/news-page";

export const Routes = () => {
  return (
    <Router>
      <Route exect path={"/"} element={<FirstPage />} />
      <Route exect path={"/news"} element={<NewsPage />} />
    </Router>
  );
};
