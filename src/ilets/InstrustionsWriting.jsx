import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstructionsWriting=() => {
  const navigate = useNavigate();
  return (
    <div className='bg-light'> 
         <h2 className='ms-5 pt-1'>Academic Writing </h2>
         <h5 className='ms-5'>1 hour</h5>
      <div className="row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-9">
       
        <div className='container'>
        <h1 className=' ms-5'>INSTRUCTIONS TO CANDIDATES :</h1>
        <p className='mt-5 '>Do not open this question paper until you are told to do so.<br/>
Write your name and candidate number in the spaces at the top of this page.<br/>
Read the instructions for each part of the paper carefully.<br/>
Answer all the questions.<br/>
Write your answers on the answer sheet. Use a pencil.<br/>
You must complete the answer sheet within the time limit.<br/>
At the end of the test, hand in both this question paper and your answer sheet.</p>
<h1 className=' ms-5 mt-5'>INFORMATION FOR CANDIDATES :</h1>
<p className='mt-5'>There are 40 questions on this question paper.<br/>
Each question carries one mark. </p>
        </div>
      </div>
     
      </div>
      <div className='text-center'> <button  className='mb-5 fs-4 py-2 px-3 mt-5 btn btn-primary' onClick={()=>navigate("/WrittingSection")}>Start</button></div>
       
    </div>
  )
}

export default InstructionsWriting
