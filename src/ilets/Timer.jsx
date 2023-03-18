import React, { useEffect, useState } from 'react'

const Timer = (props) => {


  const [min, setMin] = useState(0);
  const [sec, SetSec] = useState(30);
  const [time, setTime] = useState(true);


  useEffect(() => {
    if (time) {
      setTimeout(() => {
        SetSec(sec-1);

        if (sec === 60) {
          setMin(min + 1);
          SetSec(0);
        } else if (sec == 1) {
      
          setTime(false);
          props.score(true)
          props.submit(false)
          
          // SetSubmit(false)
          
        }
      }, 1000);
    } else {
      clearTimeout();
    }
  });


  return (
    <div className="col-4">
    <h1 className="text-center mt-3">
        <i class="fa-regular  fs-1 fa-clock"></i>{min}:{sec}
    </h1>
</div>
  )
}

export default Timer
