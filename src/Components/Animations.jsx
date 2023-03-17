import pic4 from "../images/pic4.jpg"
import pic5 from "../images/pic5.jpg"
import pic6 from "../images/pic6.jpg"
import pic7 from "../images/pic7.png"
import pic8 from "../images/pic8.png"
import pic9 from "../images/pic9.jpg"
import "./animations.css"


export default function Animations(){
    return(
        <>
            <div className="container mt-5">
        <div className="row ms-3 ms-md-0 my-5">
            <div className="col-md-2 col-5">
                <div className="box " id="pic4">
                    <div className="flip ">
                        <img src={pic4} height="150px" width="150px" alt=""/>
                        <img src={pic4} height="150px" width="150px" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-5">
                <div className="box">
                    <div className="flip">
                        <img src={pic5} height="150px" width="150px" alt=""/>
                        <img src={pic5} height="150px" width="150px" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-5">
                <div className="box">
                    <div className="flip">
                        <img src={pic6} height="150px" width="150px" alt=""/>
                        <img src={pic6} height="150px" width="150px"alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-5">
                <div className="box">
                    <div className="flip">
                        <img src={pic7} height="150px" width="150px" alt=""/>
                        <img src={pic7} height="150px" width="150px" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-5">
                <div className="box">
                    <div className="flip">
                        <img src={pic8} height="150px" width="150px" alt=""/>
                        <img src={pic8} height="150px" width="150px" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-5">
                <div className="box">
                    <div className="flip">
                        <img src={pic9} height="150px" width="150px" alt=""/>
                        <img src={pic9} height="150px" width="150px" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-danger my-red-box">
        
    </div>
    <div className="wave-show">
    <div className="custom-shape-divider-bottom-1678427759">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
</div>
        </>
    )
}