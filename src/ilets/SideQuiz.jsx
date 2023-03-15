import pic11 from "../images/pic11.jpg"
import "./sideQuiz.scss"
import TestCards from "./TestCards"
import Animations from "./Animations"


export default function SideQuiz() {
    return (

        <>
        <Animations/>
            <div className="row">
               
                <div className="col-md-6 mt-md-5 pt-md-4 ">
                    <img src={pic11} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 text-center ">
                    <h2 className=" ms-md-3 quizText"> <span className="my-text-span">  Take the Quiz </span> and analyse your performance</h2>
                    <TestCards/>
                </div>
            </div>
            <div className="my-black-box text-center pt-3">
                <h1>Go worry-free with a single test</h1>
            </div>


        </>
    )
}