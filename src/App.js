import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./ilets/form";
import Mainfile from "./Mainfile";
import SignIn from "./ilets/SignIn";
import TestCards from "./ilets/TestCards"
import SideQuiz from "./ilets/SideQuiz";
import GrammerQuiz from "./ilets/GrammerQuiz"
import "./App.css"
export default function App() {
  return (

    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainfile />}></Route>
          <Route path="Form" element={<Form />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="TestCards" element={<TestCards />} />
          <Route path="SideQuiz" element={<SideQuiz />} />
          <Route path="GrammerQuiz" element={<GrammerQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}