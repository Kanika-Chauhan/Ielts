import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({Component}) => {
const navigate = useNavigate();


useEffect(()=>{
  let login = localStorage.getItem("login")
if (!login){
    navigate("SignIn")
}
})
     
  return(
    <div>
    absd
     <Component/>
    </div>
  )
}

export default Protected
