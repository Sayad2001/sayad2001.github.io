import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import EducationPage from "../pages/education-page";

import FirstPage from "../pages/firs-pages";
import NewsPage from "../pages/news-page";
import StoryPage from "../pages/srory-page/idex";

export const Routes = () => {
  return (
    <Router>
      <Route exect path={"/"} element={<FirstPage />} />
      <Route exect path={"/news"} element={<NewsPage />} />
      <Route exect path={"/education"} element={<EducationPage />} />
      <Route exect path={"/story"} element={<StoryPage />} />
    </Router>
  );
};
