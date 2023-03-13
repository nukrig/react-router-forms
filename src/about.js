import React from "react"
import { Link, useLocation } from "react-router-dom";

export default function About(){
    const location = useLocation()
    console.log(location);
    return (
        <>
            <div style={{fontSize:'50px',fontWeight:'bold'}}>About Us</div>
            <Link to={'/contact/contactID'}> <button>Go To Contact Page</button></Link>
        </>
        )  
}
