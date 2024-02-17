import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <>
    <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
