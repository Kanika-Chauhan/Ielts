
import { useState } from "react";
import "./Forminputs.css"

export default function FormInputs(props){

    const [focused , setFocused ] = useState(false)
    const {label, handleChange, errormessage, ...inputprops} = props;

    const handleFocus=()=>{
        setFocused(true)
    }
    return(
        <>
        <div className=" ">
            <label className="label">{label}</label>
            <input className="form-control w-75 mx-auto"
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            {...inputprops}
            
            /> 
            <span className="text-danger text-center my-form-span">{errormessage}</span> <br />
            </div>
        </>
    )
}