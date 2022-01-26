import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ButtonComponent.css"

const ButtonComponent = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/transactions/" + id + "/edit");
  };

  const handleDelete = () => {
    const deletePost = async () => {
      await axios.delete(URL + "/transactions/" + id);
    };
    deletePost();
    navigate("/transactions");
  };

  
  const handleBack = () => {
    navigate("/transactions");
  };

  return (
    <div className="button-control">
      <Button onClick={handleBack} variant="dark back-btn">Back</Button>
      <Button onClick={handleEdit} variant="dark back-btn edit-btn">Edit</Button>
      <Button onClick={handleDelete} variant="dark back-btn delete-btn">Delete</Button>
    </div>
  );
};


export default ButtonComponent;
