import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";

import "./App.css";

import Header from "../src/Components/Header/Navbar";


const App = () => {
  return (
    <Provider store={store}>
      {/* <Popup />
      <ScrollToTop /> */}
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
