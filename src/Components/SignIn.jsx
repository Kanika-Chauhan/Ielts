import { useState , useEffect} from "react"
import { Link,  Outlet, useNavigate } from "react-router-dom";
import FormInputs from "./FormInputs";


export default function SignIn(){

    const navigate = useNavigate();
 
    //for Protected Routing
// const Login =()=>{
//     localStorage.setItem("login", true)
//     navigate("SideQuiz")

// }
// useEffect(()=>{
//     let login =localStorage.getItem("login")
//     if(login){
//         navigate("SideQuiz")
//     }
// })

   

    const [value, setValue] = useState({
        username:"",
        email : "",
        password : "",

    });

    const inputs = [
        {
            id: 1,
            name : "username",
            placeholder : "Username",
            label : "Enter Username",
            type : "text",
            errormessage : "Enter valid Username",
            required: true,
        },
        {
            id: 2,
            name : "email",
            placeholder : "email",
            label : "Enter email",
            type : "email",
            errormessage : "Enter valid email",
            pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",

            required: true,
        },
        {
            id: 3,
            name : "password",
            placeholder : "password",
            label : "Enter password",
            type : "password",
            errormessage: "Should be 8-20 characters & include at least 1 letter, 1 number & 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        


    ]
    const handleChange=(e)=>{
        setValue( {...value, [e.target.name]: e.target.value} )
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="  m-auto mt-5 p-3 form-width shadow box-1 rounded" >
            <h2 className="text-center">Sign In</h2>
        <p className="text-center pb-2">Not registered yet? <Link to={"/Form"}>Sign Up</Link> </p>
        {inputs.map((input)=>(

            <FormInputs key={input.id} {...input} value={value[input.name]} onChange={handleChange}/>
        )
         
        )
        }
        <div className="text-center">
        <button type="submit" className=" btn w-75 mb-1 btn-primary " onClick={()=>navigate("/SideQuiz")}>Sign In</button>
        </div>
        <p className="ms-5">Forgot<Link to="/ForgotPassword" >password?</Link></p>

        </div>
        </form>
        <Outlet/>
        
       </>
    )
}