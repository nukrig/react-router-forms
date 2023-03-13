import react from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function User() {
    const {handleSubmit,register,watch,formState}=useForm()
    const submit=(data)=>{
        console.log(data);
    }
    const {errors}=formState
    return (
        <>
        <div style={{fontSize:'50px',fontWeight:'bold'}}> Fill In the Information</div>
        <form onSubmit={handleSubmit(submit)}>
                <label style={{display:'block'}}>
                Email
                <input style={{borderColor:errors.email?"red":"black"}}
                type='text' 
                placeholder="Enter your Email"
                {...register('email',{required:true})}
                ></input>
                {errors.email ? <p style={{color:'red'}}>Error happened : {errors.email.type}</p>:null}
                </label>
                <label style={{display:'block'}}>
                Full Name
                <input style={{borderColor:errors.name?"red":"black"}}
                type='text' 
                placeholder="Enter your full name"
                {...register('name',{required:true})}
                ></input>
                {errors.name ? <p style={{color:'red'}}>Error happened : {errors.name.type}</p>:null}
                </label>
                <input type='submit'/>
            </form>
        <Link to={'/'}> <button>Go To Home Page</button></Link>
        </>
    )
}