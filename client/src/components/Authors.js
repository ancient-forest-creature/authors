import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const Authors = (props)=>{

    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
     }, [])

     const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then((res)=>{
                console.log(res.data);
                setAuthors(authors.filter((author)=>author._id !== id))
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div className="container">
            <header>
                <h1 className="mt-5" >We have quotes by:</h1>
                <div className="m-3">
                    <Link to={"/author/new"}>Add an Author</Link>
                </div>
            </header>
            <table className="table table-striped border border-dark">
                <thead>
                   <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors?
                        authors.map((author, index)=>(
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <button className='btn btn-secondary' onClick={()=>{navigate(`/author/edit/${author._id}`)}}>Edit</button>
                                    <button className='btn btn-danger ms-3' onClick={(e)=>deleteHandler(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        :null
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Authors;