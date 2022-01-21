import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Button.css"

const Button = () => {
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
      <button onClick={handleBack} className="back-btn">Back</button>
      <button onClick={handleEdit} className="edit-btn">Edit</button>
      <button onClick={handleDelete} className="delete-btn">Delete</button>
    </div>
  );
};

export default Button;
