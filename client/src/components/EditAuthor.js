import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditAuthor = (props) => {
  const {id} = useParams();
  const [errors, setErrors] = useState({});
  const [authName, setAuthName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updateData = {
        name: authName,
    };
    axios
      .put(`http://localhost:8000/api/author/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        navigate("/author");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <header>
        <h1>Edit this Author:</h1>
        <Link to={"/author"}>Home</Link>
      </header>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input onChange={(e) => setAuthName(e.target.value)} name="authName" value={authName} />
        {errors.name ? <span>{errors.name.message}</span> : null}
        <button className="btn btn-success ms-3">Submit</button>
        <button className="btn btn-secondary ms-3" onClick={(e) => navigate("/author")}>Cancel</button>
      </form>
    </div>
  );
};

export default EditAuthor;