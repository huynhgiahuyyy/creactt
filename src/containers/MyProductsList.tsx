import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import useDebounce from "../hooks/useDebounce";

const MyProductsList: React.FC = () => {
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const { fetchProducts, resetProductAction, resetProductEdit } = useActions();
  const { products, loading, error } = useTypedSelector(
    (state) => state.productsReducer
  );

  const handleDelete = (id: number) => {
    setFilteredProducts(products.filter((product: any) => product.id !== id));
  };

  useEffect(() => {
    resetProductAction();
    resetProductEdit();

    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const result = products.filter((p: any) =>
        p.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredProducts(result);
    } else {
      setFilteredProducts(products);
    }
    setSortBy("select");
  }, [searchTerm, products, debouncedSearchTerm]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setSearchTerm("");
    switch (sortBy) {
      case "title":
        setFilteredProducts(
          products.sort((a: any, b: any) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          })
        );
        break;
      case "price":
        setFilteredProducts(
          products.sort((a: any, b: any) => {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
          })
        );
        break;
      case "category":
        setFilteredProducts(
          products.sort((a: any, b: any) => {
            if (a.category < b.category) return -1;
            if (a.category > b.category) return 1;
            return 0;
          })
        );
        break;
      default:
        setFilteredProducts(products);
        break;
    }
  }, [sortBy, products]);

  return (
    <div>
      <h1>My Products</h1>

      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}

      <Form.Group className="mb-3">
        <Form.Label>Filter By</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sort By</Form.Label>
        <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="select">Select</option>
          <option value="name">Product Name</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
        </Form.Select>
      </Form.Group>

      {!loading && filteredProducts.length === 0 && (
        <Alert variant={"info"}>No results found!</Alert>
      )}

      {filteredProducts.length > 0 && (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Price</th>
                <th>About</th>
                <th>Category</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((productData: any, i: number) => (
                <tr key={productData.id}>
                  <td>{i + 1}</td>
                  <td>{productData.title}</td>
                  <td>$ {productData.price}</td>
                  <td className="td-description">{productData.description}</td>
                  <td>{productData.category}</td>
                  <td>
                    <Link
                      to={`/edit/${productData.id}`}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>

                    <Button
                      variant="danger"
                      type="button"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default MyProductsList;
