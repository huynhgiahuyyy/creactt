import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Header from "./components/Header";
import MyProductsList from "./containers/MyProductsList";
import ChartsDisplay from "./containers/ChartsDisplay";
import AddProduct from "./containers/AddProducts";
import EditProduct from "./containers/EditProduct";

const App: React.FC = () => {
  return (
    <div className="app-main">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Container>
          <Routes>
            <Route path="/products" element={<MyProductsList />} />
            <Route path="/charts" element={<ChartsDisplay />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/" element={<MyProductsList />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
};

export default App;
