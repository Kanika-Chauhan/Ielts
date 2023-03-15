import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"


import "./testimonial.scss"


export default function Testmonial(){

    
    return(
        <>
             <div className=" py-5 text-center ">
        <h4 className="text-danger">Testimonials</h4>
        <h1 className="mb-5"><b>What our clients say</b></h1>
        <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="text-center">
                        <img src={pic1} className="rounded-circle" alt=""/>
                        <h4 className="pt-3">Radhika</h4>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3 text-center mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit in reiciendis
                                voluptate voluptates nobis pariatur necessitatibus quidem facilis distinctio,
                                quisquam ea. Aliquid aspernatur debitis vel rem explicabo eius iste.</p>
                            <h1>
                                <i className="fa-solid text-danger mt-4 fa-quote-right"></i>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item " data-bs-interval="2000">
                    <div className="text-center">
                        <img src={pic2} className="rounded-circle img-fluid" alt=""/>
                        <h4 className="pt-3">Krishna</h4>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3 text-center mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit in reiciendis
                                voluptate voluptates nobis pariatur necessitatibus quidem facilis distinctio,
                                quisquam ea. Aliquid aspernatur debitis vel rem explicabo eius iste.</p>
                            <h1>
                                <i className="fa-solid text-danger mt-4 fa-quote-right"></i>
                            </h1>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="text-center">
                        <img src={pic3} className="rounded-circle" alt=""/>
                        <h4 className="pt-3">Mohan</h4>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3 text-center mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit in reiciendis
                                voluptate voluptates nobis pariatur necessitatibus quidem facilis distinctio,
                                quisquam ea. Aliquid aspernatur debitis vel rem explicabo eius iste.</p>
                            <h1>
                                <i className="fa-solid text-danger mt-4 fa-quote-right"></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-danger rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span className="carousel-control-next-icon bg-danger rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
   
        </>

        
    )
}