import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./NewPostForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NewPostForm() {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);

  const usersArr = useSelector((state) => state.usersArr);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      dispatch({
        type: "ADD_NEW_POST",
        payload: {
          ...formData,
          date: moment(new Date()).format("DD.MM.YYYY hh:mm"),
          likes: 0,
          comments: 0,
          reposts: 0,
        },
      });
      navigate("/");
    }
    setValidated(true);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleInputsChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="newpost-container">
      <Form
        className="new-post"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className="inputs-group">
          <Form.Select required name="author" onChange={handleInputsChange}>
            <option value="">Select user...</option>
            {usersArr.map((value, index) => {
              return (
                <option key={index.toString()} value={value.nickname}>
                  {value.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Control
            name="image"
            type="url"
            placeholder="Image URL(https://example.com/post.png)"
            onChange={handleInputsChange}
            required
          />
          <Form.Control
            name="content"
            type="text"
            placeholder="Description..."
            onChange={handleInputsChange}
            required
          />
        </div>
        <div className="form-actions">
          <Button type="submit" variant="success">
            Add
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
