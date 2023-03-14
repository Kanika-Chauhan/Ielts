import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./ilets/form";
import Mainfile from "./Mainfile";
import SignIn from "./ilets/SignIn";
import "./App.css"
export default function App() {
  return (

    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainfile />}>
          </Route>
          <Route path="Form" element={<Form />} />
          <Route path="SignIn" element={<SignIn />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}