import React from "react";
import { useState } from "react";
export default function Quiz() {


    var questions = [
        {
            qst: "I can't find my keys ________.",
            option: ["anywhere", "everywhere", "anything", "anytime"],
            answer: 1
        },
        {
            qst: "I come ______ England",
            option: ["from", "at", "to", "beyond"],
            answer: 1
        },
        {
            qst: "There aren't ______ people here.",
            option: ["much", "many", "a lot", "some"
            ],
            answer: 2
        },
        {
            qst: "The best way to learn a language is ______ a little every day.",
            option: ["speak", "in speaking", "to speaking ", "by speaking Correct "
            ],
            answer: 4
        },
        {
            qst: "She has been ______ of murdering her husband.",
            option: ["charged", "accused", "arrested", "blamed"
            ],
            answer: 2
        },
        {
            qst: "You should ______ swimming.",
            option: ["start up", "get off", "take up ", "take off" ],
            answer: 3
        }


    ];
    const [currentqstn, setCurrentqstn] = useState(0)
    const [score, setScore] = useState(0)
    const [totalScore, setTotalScore] = useState(false)
    const [clickedOption, setClickedOption] = useState(0)




    const handleNext = () => {
        updateScore();
        if (currentqstn + 1 < questions.length) {
            setCurrentqstn(currentqstn + 1)
            setClickedOption(0);

        } else {
            setTotalScore(true)

        }
    }
    const handlePrev = () => {
        if (currentqstn > 0) {
            setCurrentqstn(currentqstn - 1)
        }
    }
    const updateScore = () => {
        if (clickedOption === questions[currentqstn].answer) {
            setScore(score + 1);
        }
    }
    return (
            <div className=" p-4 w-50 question mb-5 border shadow m-auto mt-5 bg-light ">
                {totalScore ? (
                    <div className="text-center mt-3 "> <h4> Your total score is <i className="fa-solid fa-trophy"></i> : {score} / {questions.length} </h4>
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
                        </table>
                    </div>

                ) : (
                    <>
                        <div className="text-center text-md-start mb-3 mb-md-0">
                            <span className="badge bg-dark p-2 ">
                                {currentqstn + 1}/{questions.length}</span>
                        </div>
                        <div className="text-center mainheading">
                            <h3>{questions[currentqstn].qst}</h3>
                            <br />
                            {questions[currentqstn].option.map((val, i) => (
                                <button type="button" className={`btn btn-outline-dark m-2 ${clickedOption === i + 1 ? "checked" : null
                                    }`} key={i} onClick={() => setClickedOption(i + 1)}>{val}</button>

                            ))}
                        </div>
                        <br /> <br />
                        <div className="d-md-flex text-center  justify-content-evenly  ">
                            <button type="button" className="btn btn-dark" onClick={handlePrev} >Previous</button>
                            <button type="button" className="btn btn-dark ms-1 mt-3 mt-md-0" onClick={handleNext}  >Next</button>

                        </div>


                    </>
                )}
            </div>
    )
}