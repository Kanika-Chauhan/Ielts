import pic11 from "../images/pic11.jpg"
// import pic16 from "../images/pic16.jpg"
import pic17 from "../images/pic17.jpg"
import "./sideQuiz.css"
import { useNavigate } from "react-router-dom"


export default function SideQuiz() {
    const navigate = useNavigate();
    return (

        <>
            <div className="row">
                <div className="col-md-4 mt-md-5 pt-5 text-center quizText">
                    <h1 className="mt-md-4 ms-md-3 "> <span className="my-text-span">  Take the Quiz </span> and analyse </h1> <br />
                    <h1>your performance</h1>
                </div>
                <div className="col-md-8 ">
                    <img src={pic11} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="my-black-box text-center pt-3">
                <h1>Go worry-free with a single test</h1>
            </div>
            <div className="row">
                <div className="col-md-7" >
                    <img src={pic17} height={"550px"} className="rounded-circle img-fluid" alt="" />
                </div>
                <div className="col-md-5  pt-md-5 text-center text-md-start  mt-md-5">
                    <h1 className="mb-5 my-font-anton"> <span className="my-text-span" > Preare </span> to succeed </h1>
                    <h3 className="mb-5" ><span className="my-text-span" >Employers, professional bodies and associations accept IELTS </span> Organisations around the world rely on IELTS to help them select the right people.</h3>

                    <button className="gen-ach-buttons " onClick={() => navigate('/form')} >General test</button>
                    <button className="gen-ach-buttons ms-md-5 ms-3 mb-4 " onClick={() => navigate('/form')}>Achedemic test</button>
                    {/* <div className="mt-5 girl-img">
                        <img src={pic16} height={"200"} alt="" />
                    </div> */}

                </div>
            </div>


        </>
    )
}