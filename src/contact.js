import React from "react"
import { Link, useParams } from "react-router-dom";

export default function Contact(){
    const params=useParams();
    console.log(params);
    return (
        <>
            <div style={{fontSize:'50px',fontWeight:'bold'}}>Contact Page</div>
            <Link to={'/user'}> <button>Go To User Page</button></Link>
        </>
        )
}
