import React, { useEffect } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AddProduct: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const navigate = useNavigate();

  const { addProduct } = useActions();
  const { productAdded, loading, error } = useTypedSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    if (productAdded) {
      navigate("/products");
    }
  }, [productAdded, navigate]);

  const addProductToStore = (e: any): void => {
    e.preventDefault();

    addProduct({
      title,
      price,
      description,
      image,
      category,
      id: uuidv4(),
    });
  };

  return (
    <div>
      <h1>Add New Product</h1>

      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}

      <Form onSubmit={addProductToStore}>
        <FormGroup>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title of the product"
          />
        </FormGroup>

        <FormGroup>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter the price"
          />
        </FormGroup>

        <FormGroup>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter about the product"
          />
        </FormGroup>

        <FormGroup>
          <Form.Label>Image Path</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter the url for image"
          />
        </FormGroup>

        <FormGroup>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter the category"
          />
        </FormGroup>

        <Button variant="primary" type="submit">
          Add
        </Button>

        <Link to="/products" className="btn btn-danger pl-2 my-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddProduct;
