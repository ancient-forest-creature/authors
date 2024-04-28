import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewAuthor = (props) => {
  const [errors, setErrors] = useState({});
  const [authName, setAName] = useState("");
  const [books, setBooks] = useState([])
  const [book, setBook] = useState("")
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(authName);
    axios.post("http://localhost:8000/api/author", {name:authName, books: books})
      .then((res) => {
        console.log(res.data);
        navigate("/author");
      })
      .catch((err) => {
        console.log(`err is: ${err}`);
        setErrors(err.response.data.errors);
      });
  };

  const addBook = () => {
    console.log("hit");
    console.log(books);
    setBooks(books => [...books, book] );
    console.log(books);
    setBook("");

  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <header>
          <h1 className="mt-3">Favorite Authors</h1>
          <Link to={"/author"}>Home</Link>
        </header>
        <label>Name:</label>
        <input className="mt-3" onChange={(e) => setAName(e.target.value)} name="authName" value={authName}/>
        {errors.name ? <span>{errors.name.message}</span> : null}
        <button className="btn btn-success ms-3">Submit</button>
        <button className="btn btn-secondary ms-3" onClick={(e) => navigate("/author")}>Cancel</button>
      </form>
        <div>
          <label>Book:</label>
          <input className="mt-3" onChange={(e) => setBook(e.target.value)} name="book" value={book}/>
          {errors.books ? <span>{errors.books.message}</span> : null}
          <button className="btn btn-success ms-3" onClick={addBook}>Add Book</button>
        </div>
        {books ? books.map((bk, index) => (<p key={index}>{bk}</p>)):null}
    </div>
  );
};

export default NewAuthor;