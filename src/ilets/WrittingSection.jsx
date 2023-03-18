import React , {useState} from 'react'
import Timer from './Timer'
import imgWriting from "../images/task-1.png"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const WrittingSection = () => {
  const [totalScore, setTotalScore] = useState(true);
  const [submit ,SetSubmit] =useState(true)
  const navigate = useNavigate();


  const Submited =()=>{
    navigate('/SideQuiz')
    Swal.fire({
      title: 'Submitted',
      text: 'Test has been submitted',
      icon: 'success',
      confirmButtonText: 'ok'
    })
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
        <textarea id='text1' className='border w-100 h-100' placeholder='Type here...'  ></textarea>

        </div>
      
      </div>

      <div>
        {totalScore ? (
          
          <div className="text-center mb-3 ">
            <br />
            <button  onClick={Submited} className="btn btn-primary" >{submit ? "Submit" : "Submited"}</button>
          
          </div>
        ) : (
          
          Swal.fire({
            title: 'Success!',
            text: 'Test has been submitted',
            icon: 'success',
            confirmButtonText: 'ok'
          }),
          navigate("/SideQuiz")

        )
        }


      </div>
    </div>
  )
}

export default WrittingSection
