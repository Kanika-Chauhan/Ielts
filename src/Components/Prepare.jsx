import pic11 from "../images/pic11.jpg"
import pic17 from "../images/pic17.jpg"
import "./sideQuiz.css"
import { Link, useNavigate } from "react-router-dom"
import Protected from "./Protected"


export default function SideQuiz() {
    const navigate = useNavigate()

//    const Start =()=>{
//     let auth =localStorage.getItem("login")
//     if(!auth){
// navigate("SignIn")
//     }
//     else{
//         navigate("SideQuiz")
//     }
//    }


return (

        <>
            
            <div className="row">
                <div className="col-md-7" >
                    <img src={pic17} height={"550px"} className="rounded-circle img-fluid" alt="" />
                </div>
                <div className="col-md-5  pt-md-5 text-center text-md-start  mt-md-5">
                    <h1 className="mb-5 my-font-anton"> <span className="my-text-span" > Preare </span> to succeed </h1>
                    <h3 className="mb-5" ><span className="my-text-span" >Employers, professional bodies and associations accept IELTS </span> Organisations around the world rely on IELTS to help them select the right people.</h3>

                    <button className="gen-ach-buttons "onClick={()=>navigate("/SignIn")}>General test</button>
                    <button className="gen-ach-buttons ms-md-5 ms-3 mb-4 " onClick={() => navigate('/form')}>Achedemic test</button>
                    
                </div>
            </div>


        </>
    )
}