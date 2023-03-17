import React, { useEffect, useRef } from "react";
import { useState, createContext } from "react";
import "./Grammer.scss";
export default function Quiz() {
  var questions = [
    {
      qst: "I can't find my keys ________.",
      option: ["anywhere", "everywhere", "anything", "anytime"],
      answer: 1,
    },
    {
      qst: "I come ______ England",
      option: ["from", "at", "to", "beyond"],
      answer: 1,
    },
    {
      qst: "There aren't ______ people here.",
      option: ["much", "many", "a lot", "some"],
      answer: 2,
    },
    {
      qst: "The best way to learn a language is ______ a little every day.",
      option: ["speak", "in speaking", "to speaking ", "by speaking Correct "],
      answer: 4,
    },
    {
      qst: "She has been ______ of murdering her husband.",
      option: ["charged", "accused", "arrested", "blamed"],
      answer: 2,
    },
    {
      qst: "You should ______ swimming.",
      option: ["start up", "get off", "take up ", "take off"],
      answer: 3,
    },
  ];

  const [currentqstn, setCurrentqstn] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(false);
  const [clickedOption, setClickedOption] = useState(0);
  const [submit ,SetSubmit] =useState(true)

  //timer states
  const [min, setMin] = useState(0);
  const [sec, SetSec] = useState(10);
  const [time, setTime] = useState(true);

  const handleNext = () => {
    updateScore();
    if (currentqstn + 1 < questions.length) {
      setCurrentqstn(currentqstn + 1);
      setClickedOption(0);
    } else {
      setTotalScore(true);
      SetSubmit(true)
    }
   
  };
  const handlePrev = () => {
    if (currentqstn > 0) {
      setCurrentqstn(currentqstn - 1);
    }
  };
  const updateScore = () => {
    if (clickedOption === questions[currentqstn].answer) {
      setScore(score + 1);
    }
  };

  //timer
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
//   const sub =useRef();
  const Submited =()=>{
        // sub.current.style.text="red"

        console.log("sdfdsgfg")
        SetSubmit(false)
      
  }

  return (
    <div>
      <div className="row mx-3 heading-passage ">
        <div className="col-md-8  mb-2 mt-1 border-none rounded">
          
          <p>
            <b>Passage 1</b>
          </p>

          <p>Read the text below and answer questions</p>
        </div>
        <div className="col-md-4">
            <h1 className="text-center mt-3">
                <i class="fa-regular  fs-1 fa-clock"></i>    {min}:{sec}
            </h1>
        </div>
      </div>


      <div className="row mx-3 border   rounded">
        <div className="col bg-light left-side">
          {/* passage */}
          <h3>Passage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sit
            eos ut ullam officiis? Quibusdam, tempore corporis temporibus facere
            modi magni expedita, architecto, labore fugiat suscipit ducimus
            perferendis? Assumenda vitae, veritatis beatae deserunt voluptatum
            non distinctio sint! Impedit veritatis incidunt quibusdam qui
            excepturi unde, cum nihil rerum fugit placeat nulla voluptas eos
            atque amet, sequi ab! Reprehenderit distinctio incidunt molestiae
            minus saepe alias odit autem quae? Voluptate molestiae magni quo
            ratione nihil facilis eligendi beatae deserunt, mollitia alias
            distinctio soluta qui pariatur? Voluptatibus quidem dolore
            laudantium harum repellendus! Corrupti perspiciatis corporis
            blanditiis quam eum neque! Non iusto totam sequi illo nemo, aut sint
            earum officiis doloribus fugit eos ea sunt veniam odit nisi, aliquid
            consectetur? Delectus, eligendi iusto et doloremque unde voluptates
            dignissimos molestias accusantium deserunt? Maxime saepe nobis vel
            consequuntur labore incidunt ullam odit placeat itaque? Laborum
            atque aperiam sit neque ipsa earum eum laboriosam excepturi
            inventore perspiciatis odio voluptates expedita maxime, voluptatum
            porro placeat quam maiores dolore velit odit consequuntur? Corporis
            quas numquam, consequatur nihil optio mollitia ipsum vero eius
            laborum dolor et iure est voluptas aspernatur in. Cupiditate
            delectus repellat neque hic corrupti, ab vel optio eaque ducimus quo
            praesentium omnis, deserunt itaque accusantium dolores maiores quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quibusdam veniam libero expedita blanditiis iusto laboriosam nam
            consequuntur necessitatibus culpa sed modi rem, provident dolorem
            dolor perspiciatis perferendis molestias! Repudiandae cumque debitis
            nihil eius qui doloribus assumenda, dicta molestias totam. Ab earum
            tempore ea dolorum officia maxime incidunt reprehenderit distinctio,
            impedit repellat consequuntur dolor est corporis quibusdam, delectus
            veniam, minima beatae? Harum maiores maxime ea modi recusandae odit
            quod cum facere ratione sapiente, temporibus dignissimos quo,
            dolores vero eum. Consequuntur optio dicta reprehenderit, beatae
            pariatur consectetur quasi libero, ea omnis sapiente hic placeat
            debitis veniam quas modi eligendi mollitia provident! Possimus natus
            recusandae blanditiis facere? Repellat, ad! Quasi nisi perspiciatis
            nam soluta molestiae dicta aperiam error itaque molestias, dolorum,
            asperiores ut sapiente quis odio eum. Hic, veniam nulla soluta culpa
            nisi officiis eligendi modi reprehenderit minima a delectus fuga
            odit totam illum saepe similique quibusdam quidem voluptas, expedita
            consequuntur recusandae! Voluptate quos deserunt quam repellat
            deleniti, repellendus cumque quis ex est inventore, nemo dignissimos
            modi quas facere, laudantium tempora esse hic aut dicta? Suscipit
            consequuntur at eligendi maxime eos, excepturi officiis earum dolore
            obcaecati est libero nostrum inventore aspernatur repellendus
            voluptate odit dignissimos commodi. Reprehenderit perferendis nulla
            nisi nesciunt eum?
          </p>
        </div>
        <div className="col ">
          {/* Questions */}
          <h3>Questions</h3>
          <div className=" p-4  question  border  m-auto  bg-light ">
            {totalScore ? (
              <div className="text-center mt-3 ">
                {/* <h4> Your total score is <i className="fa-solid fa-trophy"></i> : {score} / {questions.length} </h4>
                        <h4 className="mt-4"> Percentage <i className="fa-solid fa-award"></i> : {(score / questions.length) * 100}% </h4>
                        <table className="text-start table  mt-md-4" >
                            <tr >
                                <td><h5>Correct answers <i className="fa-regular fa-face-laugh"></i></h5></td>
                                <td><h5>{score}</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Wrong answers <i className="fa-regular fa-face-frown"></i></h5></td>
                                <td><h5>{(questions.length) - (score)}</h5></td>
                            </tr>
                        </table> */}
                 <br />
                <button onClick={Submited} className="btn btn-primary" >{submit?"Submit":"Submited"}</button>
              </div>
            ) : (
              <>
                <div className="text-center text-md-start mb-3 mb-md-0">
                  <span className="badge bg-dark p-2 ">
                    {currentqstn + 1}/{questions.length}
                  </span>
                </div>
                <div className="text-center mainheading">
                  <h3>{questions[currentqstn].qst}</h3>
                  <br />
                  {questions[currentqstn].option.map((val, i) => (
                    <button
                      type="button"
                      className={`btn d-block ms-5 btn-outline-dark m-2 ${
                        clickedOption === i + 1 ? "checked" : null
                      }`}
                      key={i}
                      onClick={() => setClickedOption(i + 1)}
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <br /> <br />
                <div className="d-md-flex text-center  justify-content-evenly  ">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={handlePrev}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark ms-1 mt-3 mt-md-0"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="footer-passage mx-2  mt-2">hgh</div>
    </div>

    //     <div className="bgGrammer">
    //         <div className="">

    //  <h1 className="mt-2 d-flex justify-content-center">You have only 10 seconds to Complete the quiz</h1>
    //             <h1 className="d-flex justify-content-center">{min}:{sec}</h1>
    //             </div>

    //         <div className=" p-4 w-50 question mb-5 border shadow m-auto mt-5 bg-light ">
    //             {totalScore ? (
    //                 <div className="text-center mt-3 ">
    //                      {/* <h4> Your total score is <i className="fa-solid fa-trophy"></i> : {score} / {questions.length} </h4>
    //                     <h4 className="mt-4"> Percentage <i className="fa-solid fa-award"></i> : {(score / questions.length) * 100}% </h4>

    //                     <table className="text-start table  mt-md-4" >
    //                         <tr >
    //                             <td><h5>Correct answers <i className="fa-regular fa-face-laugh"></i></h5></td>
    //                             <td><h5>{score}</h5></td>
    //                         </tr>
    //                         <tr>
    //                             <td><h5>Wrong answers <i className="fa-regular fa-face-frown"></i></h5></td>
    //                             <td><h5>{(questions.length) - (score)}</h5></td>
    //                         </tr>
    //                     </table> */}
    //                     Go to next passage <br />
    //                     <button>next</button>
    //                 </div>

    //             ) : (
    //                 <>
    //                     <div className="text-center text-md-start mb-3 mb-md-0">
    //                         <span className="badge bg-dark p-2 ">
    //                             {currentqstn + 1}/{questions.length}</span>
    //                     </div>
    //                     <div className="text-center mainheading">
    //                         <h3>{questions[currentqstn].qst}</h3>
    //                         <br />
    //                         {questions[currentqstn].option.map((val, i) => (
    //                             <button type="button" className={`btn d-block ms-5 btn-outline-dark m-2 ${clickedOption === i + 1 ? "checked" : null
    //                                 }`} key={i} onClick={() => setClickedOption(i + 1)}>{val}</button>

    //                         ))}
    //                     </div>
    //                     <br /> <br />
    //                     <div className="d-md-flex text-center  justify-content-evenly  ">
    //                         <button type="button" className="btn btn-dark" onClick={handlePrev} >Previous</button>
    //                         <button type="button" className="btn btn-dark ms-1 mt-3 mt-md-0" onClick={handleNext}  >Next</button>

    //                     </div>

    //                 </>
    //             )}
    //         </div>
    //     </div>}
  );
}
