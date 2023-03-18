import React, { useEffect, } from "react";
import { useState, createContext } from "react";
import "./Grammer.scss";
import Timer from "./Timer";
export default function Quiz() {
    var questions = [
        {
          qst: "The Mpemba Effect cannot be seen when comparing liquids with an extreme temperature difference . ",
          option: ["True","False","Not Given"],
          answer: 1,
        },
        {
          qst: "Osborne and Mpemba’s results are still widely accepted today. ",
          option: ["True" ,"False","Not Given"],
          answer: 2,
        },
        {
          qst: "The size of the container does not alter the Mpemba Effect. ",
          option: ["True" , "False" , "Not Given"],
          answer: 2,
        },
        {
          qst: "Osborne and Mpemba experimented on both pure and impure water. ",
          option: ["True" , "False" , "Not Given"],
          answer: 3,
        },
        {
          qst: "One variable is the timing of containers in a freezer. ",
          option: ["True" , "False" , "Not Given"],
          answer: 1,
        },
        {
          qst: "Physicists now agree that supercooling accounts for the Mpemba Effec",
          option: ["True" , "False" , "Not Given"],
          answer: 2,
        },
        {
          qst: "For more than 2000 years people have wondered why raising the ____ of cold water before cooling it results in more rapid cooling.",
          option: ["melt" , "process" , "temperature"],
          answer: 3,
        },
        {
          qst: " At first researchers thought that a warm container created its own icy ____  which made the water freeze faster",
          option: ["hollow" , "melt" , "temperature"],
          answer: 1,
        },
        {
          qst: "comparisons with containers resting on a dry ____  indicated that this was inaccurate.",
          option: ["process" , "surface" , "significance"],
          answer: 2,
        },
        {
          qst: " Evaporation of water proved not to be a ____  Temperature measurements showed that,although the water in the cooler container reached 00C before the warmer one, it took longer to actually solidify",
          option: ["factor" , "significance" , "element"],
          answer: 1,
        },
        {
          qst: " The water temperature drops the most at the top and sides of the container. Provided there is a temperature ____  the water will continue to circulate and to cool down.",
          option: ["element" , "process" , "difference"],
          answer: 3,
        },
        {
          qst: " Cooler water will have less water ____    and thus a slower  rate of freezing",
          option: ["circulation" , "significance" , "limit"],
          answer: 1,
        },
  
  
  
  
  
  
  
  
      ];
  const [currentqstn, setCurrentqstn] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(false);
  const [clickedOption, setClickedOption] = useState(0);
  const [submit ,SetSubmit] =useState(true)

  //timer states
  // const [min, setMin] = useState(0);
  // const [sec, SetSec] = useState(30);
  // const [time, setTime] = useState(true);

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
  // useEffect(() => {
  //   if (time) {
  //     setTimeout(() => {
  //       SetSec(sec-1);

  //       if (sec === 60) {
  //         setMin(min + 1);
  //         SetSec(0);
  //       } else if (sec == 1) {
  //         setTotalScore(true);
  //         setTime(false);
  //         SetSubmit(false)
          
  //       }
  //     }, 1000);
  //   } else {
  //     clearTimeout();
  //   }
  // });
  const Submited =()=>{

        console.log("sdfdsgfg")
        SetSubmit(false)
      
  }

  return (
    <div>
      <div className="row mx-3 heading-passage mb-2">
        <div className="col-8  mt-1 border-none rounded">
          
          <p>
            <b>Passage 1</b><br/>
            Read the text below and answer questions
          </p>

          
        </div>
        {/* timer component  */}
        <Timer score={setTotalScore} submit={SetSubmit}/>
        {/* <div className="col-4">
            <h1 className="text-center mt-3">
                <i class="fa-regular  fs-1 fa-clock"></i>{min}:{sec}
            </h1>
        </div> */}
      </div>


      <div className="row mx-3 border   rounded">
        <div className="col-md-6 bg-light left-side">
          {/* passage */}
          <h3>Passage</h3>
          <p>In 300 BC, the famous philosopher Aristotle wrote about a strange phenomenon that he had observed: “Many people, when they want to cool water quickly, begin by putting it in the sun.” Other philosophers over the ages noted the same result, but were unable to explain it. In 1963, a young Tanzanian student named Erasto Mpemba noticed that the ice cream he was making froze faster if the mix was placed in the freezer while warm than if it were at room temperature. He persisted in questioning why this occurred, and eventually physicist Denis Osborne began a serious investigation into what is now known as the Mpemba Effect. He and Mpemba co-authored a paper in New Scientist in 1969, which produced scientific descriptions of some of the many factors at work in freezing water. It was initially hypothesised that the warm bowl melted itself a place in the ice on the freezer shelf, thus embedding its base in a ‘nest’ of ice, which would accelerate freezing. The hypothesis was tested by comparing the result when bowls of warm water were placed on ice and on a dry wire shelf; this demonstrated that the ice nest actually had little effect. A second suggestion was that the warmer water would be evaporating at its surface, thus reducing the volume needing to be frozen, but this idea was also shown to be insignificant. Thermometers placed in the water showed that the cooler water dropped to freezing temperature well before the warmer bowlful, and yet the latter always froze solid first. Experiments at different temperatures showed that water at 50C took longest to freeze in a conventional freezer, while water initially at 350C was quickest. On further examination, an explanation for this paradox began to emerge. Losing heat from the water occurs at the points where it is in touch with the colder atmosphere of the freezer, namely the sides of the bowl and the water surface. A warm surface will lose heat faster than a cold one because of the contrast between the temperatures; but of course there is more heat to be lost from one bowl than the other! If the surface can be kept at a higher temperature, the higher rate of heat loss will continue. As long as the water remains liquid, the cooling portion on top will sink to the bottom of the bowl as the warmer water below rises to take its place. The early freezing that may occur on the sides and base of the container will amplify the effect. The bowl that is more uniformly cold will have far less temperature difference so the water flow will be minimal. Another inhibiting factor for this container is that ice will also form quite quickly on the surface. This not only acts as insulation, but will virtually stop the helpful effects of the water circulating inside the bowl. Ultimately, the rate of cooling the core of this body of water becomes so slow that the other warmer one is always fully frozen first. While there are limitations to this comparison (for example, we would not see such a result if one quantity were at 10C and another at 990C) this counter-intuitive result does hold true within the 5–350C range of temperatures indicated previously</p>
         <p>Since this paper was published, the validity of the research findings has been questioned by a number of reviewers. They point out that the initial experimental question was not clearly defined; for example, the researchers needed to decide on exactly what constituted freezing the water. They also state that the rate at which water freezes depends on a large number of variables. Container size is one of these; for the Mpemba Effect to be noticed, the container must be large enough to allow a free circulation of water to take place, yet small enough for the freezing areas of the side and base to be effective at extracting heat too. Secondly, research at a University in St Louis, Missouri, suggests that the Mpemba Effect may be affected by water purity, or by dissolved gas in the water. Distilled water is totally free of the particles that are common in normal drinking water or mineral water. When suspended in water, these particles may have a small effect on the speed of cooling, especially as ice molecules tend to expel them into the surrounding water, where they become more concentrated. Just as salt dissolved in water will raise the boiling point and lower the temperature at which it freezes, the researchers found that the final portion of ordinary water needed extra cooling, below zero, before all was frozen solid. One more factor that can distort the effect is observed if the bowls are not placed simultaneously into the same freezer. In this case, the freezer thermostat is more likely to register the presence of a hotter bowl than a colder one, and therefore the change in internal temperature causes a boost of freezing power as the motor is activated. The Mpemba Effect is still not fully understood, and researchers continue to delve into its underlying physics. Physicists cannot reach consensus. Some suggest that supercooling1 is involved; others that the molecular bonds in the water molecules affect the rate of cooling and freezing of water. A 2013 competition to explain the phenomenon run by the Royal Society of Chemistry attracted more than 22,000 entries, with the winning one suggesting supercooling as an important factor so it seems the question and its underlying explanation continue to fascinate.
</p>
        </div>
        <div className="col-md-6 mt-5 mt-md-0 ">
          {/* Questions */}
          <h3>Questions</h3>
          <div className=" p-4  question  border  m-auto  bg-light ">
            {totalScore ? (
              <div className="text-center mt-3 ">
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
                    className="btn btn-dark ms-1  mt-md-0"
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

  );
}
