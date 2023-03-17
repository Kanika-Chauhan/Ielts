import pic11 from "../images/pic11.jpg"
import "./sideQuiz.scss"
import TestCards from "./TestCards"
import Animations from "./Animations"


export default function SideQuiz() {
    return (

        <>
        
        <div>
            <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-1 mt-5 d-none d-sm-inline">IELTS</span>
                   
                </a>
                <i className="fa-solid ms-4 mb-4 fa-user fs-1"></i>
                <ul className="nav nav-pills flex-column  mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                        <i className="fa-solid mt-5 fa-laptop"></i><span className="ms-1  d-none text-white d-sm-inline">Ielts Test</span>
                        </a>
                    </li>
                    <li>
                        {/* <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle"> */}
                        {/* <i className="fa-solid mt-4 text-white fa-user-tie"></i> <span className="ms-1 mt-4 d-none d-sm-inline text-white">Ielts Tutor</span> </a> */}
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"><i className="fa-solid  mt-5 text-white fa-user-tie"></i> <span className="d-none text-white  d-sm-inline">Ielts Tutor</span> </a>
                            </li>
                            <li>
                                <a  href="#" className="nav-link px-0 mt-5" >  <i class="fa-solid fa-chalkboard"></i>   <span className="d-none text-white fs-3 d-sm-inline">Ielts Practice</span></a>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
                <hr/>
                
            </div>
            {/* <Animations/> */}
         

        </div>
        <div className="row container mt-5 pe-5">
               
               <div className="col-md-5 mt-md-5 pt-md-4 ">
                   <img src={pic11} className="img-fluid mt-5" alt="" />
               </div>
               <div className="col-md-7  container">
                   <h2 className=" ms-md-3 quizText pb-4"> <span className="my-text-span">  Take the Quiz </span> and analyse your performance</h2>
                   <div className=" ms-5 ps-5 "><TestCards/></div>
                   
               </div>
           </div>
           <div className="my-black-box text-center pt-3">
               <h1>Go worry-free with a single test</h1>
           </div>
        </div>
       
    </div>
</div>
            
       
        {/* </div> */}
       

        </>
    )
}