import React from 'react'
import { navigate, useNavigate } from 'react-router-dom'

const TestCards = () => {
  const navigate = useNavigate();
  return (
    <div>
    

      <div className="row m-auto my-5 gap-md-5 text-center justify-content-evenly mt-4">
          <div style={{backgroundColor : "#94dae9"}} className="card   shadow w-50   col-md-6" >
            <div className="card-body">
              <h4 className="card-title">Reading</h4>
              <p className="card-text pt-1">You will get 60 minutes to complete 40 questions. Click to start</p>
              <a href="#" className="btn btn-primary" onClick={()=>navigate('/GrammerQuiz')}>Start</a>
            </div>
          </div>

      </div>
      <div className="row m-auto my-5 gap-md-5 text-center justify-content-evenly mt-4">
        <div style={{backgroundColor : "#94dae9"}} className="card shadow w-50 col-md-6" >
          <div className="card-body">
            <h4 className="card-title">Writing</h4>
            <p className="card-text">You will get 60 minutes to complete 40 questions. Click to start</p>
            <a href="#" className="btn btn-primary">Start</a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default TestCards
