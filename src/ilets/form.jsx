import FormInputs from "./FormInputs";
import { useState } from "react";
import "./form.css"
import { Link, Outlet } from "react-router-dom";

export default function Form(){
    const [values, setValues] = useState({
        username: "",
        email: "",
        mobile: "",
        dateofbirth:"",
        password: "",
        confirmpassword: "",
    });

    const inputs = [
        {
            id:1,
            name:"username",
            placeholder:"username",
            label:"Username",
            type: "text",
            errormessage:"enter valid username",
            required: true
        },
        {
            id:2,
            name:"email",
            placeholder:"email",
            label:"Email",
            type: "email",
            errormessage:"enter valid email",
            pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
            required: true


        },
        // {
        //     id:3,
        //     name:"mobile",
        //     placeholder:"mobile",
        //     label:"Mobile",
        //     type: "number",
        //     errormessage:"enter valid mobile no.",
        //     required: true


        // },
        // {
        //     id:4,
        //     name:"Dateofbirth",
        //     placeholder:"Date of birth",
        //     label:"Date of birth",
        //     type: "date",
        //     errormessage:"enter your Birthday",
        //     pattern:"^[0-9]{10}$",
        //     required: true


        // },
        {
            id:5,
            name:"password",
            placeholder:"password",
            label:"Password",
            type: "password",
            errormessage: "Should be 8-20 characters & include at least 1 letter, 1 number & 1 special character!",
        
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true


        },
        {
            id:6,
            name:"confirmpassword",
            placeholder:" confirm password",
            label:"Confirm password",
            type: "password",
            errormessage:"password did not match",
            pattern:values.password,
            required: true


        },
       
    ];

    const handleChange=(e)=>{
        setValues( {...values, [e.target.name]: e.target.value} )
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="  m-auto mt-5 p-3 form-width shadow box-1 rounded" >
            <h2 className="text-center pb-4">Sign Up</h2>
        {inputs.map((input)=>(

            <FormInputs key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
        )
         
        )
        }
        <div className="text-center">
        <button type="submit" className=" btn w-75 mb-1 btn-primary">Sign Up</button>
        <p>Already Registered? <Link to={"/SignIn"}>Sign in</Link> </p>
        </div>

        </div>
        </form>
        <Outlet/>
       
        </>
    ) 
    
}