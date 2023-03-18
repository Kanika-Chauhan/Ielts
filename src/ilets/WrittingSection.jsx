import React , {useState} from 'react'
import Timer from './Timer'
import imgWriting from "../images/task-1.png"

const WrittingSection = () => {
  const [totalScore, setTotalScore] = useState(true);
  const [submit ,SetSubmit] =useState(true)
  const [textarea, setTextarea] =useState(false)


  const Submited =()=>{

    console.log("sdfdsgfg")
    SetSubmit(false)
  
}

  return (
    <div>
      <Timer heading={"Writing Section"} para={"Observe the image and write 150 words."} score={setTotalScore} submit={SetSubmit} />
      <div className="row mt-4 container-fluid mx-auto">
        <div className="col-md-6 border">
          <img src={imgWriting} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6">
        <textarea className='border w-100 h-100' placeholder='Type here...'  ></textarea>

        </div>
      
      </div>

      <div>
        {totalScore ? (
          
          <div className="text-center mb-3 ">
            <br />
            <button onClick={Submited} className="btn btn-primary" >{submit ? "Submit" : "Submited"}</button>
          
          </div>
        ) : (
          <div className="col-md-6   mt-5 mt-md-0">

          <textarea disabled className='border w-100 h-100' placeholder='Type here...'  ></textarea>
        </div>
        )
        }


      </div>
    </div>
  )
}

export default WrittingSection
