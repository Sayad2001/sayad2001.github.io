import React from "react";
import { Route, Routes as Router } from "react-router-dom";

import FirstPage from "../pages/firs-pages";;

export const Routes = () => {
  return (
    <Router>
      <Route path={"/"} element={<FirstPage />} />
    </Router>
  );
};
