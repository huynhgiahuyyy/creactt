import React, { useEffect, useReducer } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const defaultState = {
  title: "",
  price: "",
  description: "",
  image: "",
  category: "",
};

const productReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "RESET":
      return defaultState;
    default:
      return state;
  }
};

const EditProduct: React.FC = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(productReducer, defaultState);
  const navigate = useNavigate();

  const { editProduct, getProductDetail } = useActions();
  const { productData, loading, error } = useTypedSelector(
    (state) => state.productDetailReducer
  );

  const {
    productEdited,
    loading: editLoading,
    error: editError,
  } = useTypedSelector((state) => state.productsReducer);

  useEffect(() => {
    if (productEdited) {
      navigate("/products");
    }
  }, [productEdited, navigate]);

  useEffect(() => {
    if (productData) {
      dispatch({ type: "SET_TITLE", payload: productData.title });
      dispatch({ type: "SET_PRICE", payload: productData.price });
      dispatch({ type: "SET_DESCRIPTION", payload: productData.description });
      dispatch({ type: "SET_IMAGE", payload: productData.image });
      dispatch({ type: "SET_CATEGORY", payload: productData.category });
    }

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [productData]);

  useEffect(() => {
    getProductDetail(id ? id : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const editProductToStore = (e: any): void => {
    e.preventDefault();

    editProduct({
      title: state.title,
      price: state.price,
      description: state.description,
      image: state.image,
      category: state.category,
      id,
    });
  };

  return (
    <div>
      <h1>Update Product </h1>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}

      {editError && <ErrorMessage message={editError} />}
      {editLoading && <Loader />}

      {!loading && !error && productData && (
        <Form onSubmit={editProductToStore}>
          <FormGroup>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={state.title}
              onChange={(e) =>
                dispatch({ type: "SET_TITLE", payload: e.target.value })
              }
              placeholder="Enter title of the product"
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={state.price}
              onChange={(e) =>
                dispatch({ type: "SET_PRICE", payload: e.target.value })
              }
              placeholder="Enter the price"
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={state.description}
              onChange={(e) =>
                dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
              }
              placeholder="Enter about the product"
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Image Path</Form.Label>
            <Form.Control
              type="text"
              value={state.image}
              onChange={(e) =>
                dispatch({ type: "SET_IMAGE", payload: e.target.value })
              }
              placeholder="Enter the url for image"
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={state.category}
              onChange={(e) =>
                dispatch({ type: "SET_CATEGORY", payload: e.target.value })
              }
              placeholder="Enter the category"
            />
          </FormGroup>

          <Button variant="primary" type="submit">
            Update
          </Button>

          <Link to="/products" className="btn btn-danger pl-2 my-2">
            Cancel
          </Link>
        </Form>
      )}
    </div>
  );
};

export default EditProduct;
