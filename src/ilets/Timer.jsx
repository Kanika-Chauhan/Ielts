import React, { useEffect, useState } from 'react'

const Timer = (props) => {


  const [min, setMin] = useState(0);
  const [sec, SetSec] = useState(10);
  const [time, setTime] = useState(true);


  useEffect(() => {
    if (time) {
      setTimeout(() => {
        SetSec(sec - 1);

        if (sec === 60) {
          setMin(min + 1);
          SetSec(0);
        } else if (sec == 1) {

          setTime(false);
          props.score(false)
          props.submit(false)

          // SetSubmit(false)

        }
      }, 1000);
    } else {
      clearTimeout();
    }
  });


  return (

    <>
      <div className="row mx-3 heading-passage mb-2">
        <div className="col-8  mt-1 border-none rounded">

          <p>
            <b>{props.heading}</b><br />
            {props.para}
          </p>


        </div>

        <div className="col-4">
          <h1 className="text-center mt-1">
            <i class="fa-regular  fs-1 fa-clock"></i>     {min}:{sec}
          </h1>
        </div>
      </div>
    </>


  )
}

export default Timer
