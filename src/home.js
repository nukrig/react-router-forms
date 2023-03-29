import React, { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
export default function Home(){
    const navigate=useNavigate();
    return (
    <>
        <div style={{fontSize:'50px',fontWeight:'bold'}}>Home Page</div>
        <Link to={'/about'}> <button>Go To About Page</button></Link>
    </>
    )  
}
