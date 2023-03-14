
import { useEffect, useState } from "react"
function App(){
    const[milli,setMilli]=useState(0);
  const[sec,setSec]=useState(0);
  const[mint,setMint]=useState(0);
  const[hours,setHours]=useState(0);
  const[time, setTime]=useState(false);
  const[text,setText]=useState([]);

  useEffect(()=>{
      let x;
      if(time){
    
    
       x= setTimeout(()=>{
          setMilli(milli+1);
          if(milli===60){
            setSec(sec+1);
            setMilli(0);
          }
          else if(sec===60){
              setMint(mint+1)
              setSec(0);
          }else if(sec===4){
            setTime(false);
          }
          else if(mint===60){
              setHours(hours+1);
              setMint(0);
            }
          },10);
        }
        else{
            clearTimeout(x);
          }
      }
  )
  const handleReset=()=>{
      setMilli(0);
      setSec(0);
      setMint(0);
      setHours(0);
  }
const handleLapse=()=>{
    setText( [ ...text, `${hours}:${mint}:${sec}:${milli}`  , <br/>  ])

  }
  
  
    return(
        <>
          <div className="rounded-pill border-danger bg-warning shadow w-50 mx-auto py-4 border-5 border text-center mt-5 ">
          <h1>{hours}:{mint}:{sec}:{milli}</h1>
          </div>
          <div className="text-center my-4 ">
          <button className="btn btn-danger mx-2" onClick={()=>{setTime(true)}}>start</button>
          <button className="btn btn-danger mx-2" onClick={()=>{setTime(false)}}>stop</button>
          <button className="btn btn-danger mx-2" onClick={handleReset}>reset</button>
          <button className="btn btn-danger mx-2" onClick={handleLapse}>lapse</button>
          </div>
      <h6 className="text-center">{text}</h6>
    </>
  );
}

export default App;


