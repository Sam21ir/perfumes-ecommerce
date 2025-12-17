import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";

import "./App.css";

import Header from "../src/Components/Header/Navbar";
import Footer from "../src/Components/Footer/Footer";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>

        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
