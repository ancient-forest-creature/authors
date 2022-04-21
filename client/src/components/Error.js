import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


const Error = ()=>{


    
    return(
        <div className="contaniner">
            <h3>Humm. We can't seem to find that author. Would you like to add them to our database?</h3>
            <Link to={"/author/new"}>Create Author</Link>
        </div>
    )
}


export default Error;