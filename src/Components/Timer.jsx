import React, {useState, useEffect} from 'react'

export default function Timer(totalScore) {
    const [min, setMin] = useState(0);
  const [sec, SetSec] = useState(10);
  const [time, setTime] = useState(true);


  useEffect(() => {
    if (time) {
      setTimeout(() => {
        SetSec(sec-1);

        if (sec === 60) {
          setMin(min + 1);
          SetSec(0);
        } else if (sec == 1) {
          setTotalScore(true);
          setTime(false);
          SetSubmit(false)
          
        }
      }, 1000);
    } else {
      clearTimeout();
    }
  });
//   const Submited =()=>{

//         console.log("sdfdsgfg")
//         SetSubmit(false)
      
//   }

  return (
    <div>
      <div className="row mx-3 heading-passage mb-2">
        <div className="col-md-8  mt-1 border-none rounded">
          
          <p>
            <b>Passage 1</b>
          </p>

          <p>Read the text below and answer questions</p>
        </div>
        <div className="col-md-4">
            <h1 className="text-center ">
                <i class="fa-regular  fs-1 fa-clock"></i>    {min}:{sec}
            </h1>
        </div>
      </div>
    </div>
  )
}
