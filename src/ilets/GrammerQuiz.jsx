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
      qst: "You should _____ swimming.",
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
  const Submited =()=>{

        console.log("sdfdsgfg")
        SetSubmit(false)
      
  }

  return (
    <div>
      <div className="row mx-3 heading-passage mb-2">
        <div className="col-md-8  mt-1 border-none rounded">
          
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
        <div className="col-md-6 bg-light left-side">
          {/* passage */}
          <h3>Passage</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel suscipit voluptatem delectus praesentium neque, cupiditate nulla saepe itaque maxime laboriosam impedit consequuntur quidem cum eaque autem reiciendis, modi minus tenetur vitae. Rem laudantium deserunt consequuntur tenetur facere qui optio repellat ipsam omnis. Totam eos praesentium nostrum illum nesciunt perferendis illo, reiciendis officia fugit non. Rerum ab optio dolore praesentium blanditiis fuga repudiandae sed quod tempora, mollitia sit molestiae, maxime architecto commodi. Consectetur soluta fugit labore culpa placeat rerum sit, et temporibus voluptatem, quod molestiae dolor delectus amet ex quia? Quis voluptates nemo voluptatem ratione incidunt vitae quaerat eligendi nihil, voluptatibus sequi voluptate a harum adipisci itaque eos dolores, aperiam nisi similique tempore neque quas vel unde? Eligendi dolores repellendus sunt voluptatibus, saepe ipsam praesentium dolor at quasi illo a provident officia excepturi odio debitis qui error quisquam quibusdam dolorem molestias voluptatum amet aliquid hic modi. Cupiditate totam fugiat at tempora maiores recusandae molestiae mollitia corporis repellat necessitatibus aperiam possimus, fugit nemo assumenda aut officiis architecto veritatis sequi quasi ratione. Nostrum sunt fugiat, ullam eum vero aliquid corporis quo facere tenetur est quidem inventore, totam eligendi. Quae illo molestiae, quod aspernatur dignissimos obcaecati minima architecto ratione sed necessitatibus, corrupti iure at consectetur. Ipsam necessitatibus eius tenetur asperiores dignissimos. Dignissimos eius eos, quidem iusto laudantium adipisci commodi provident eveniet, ad reprehenderit qui neque velit aut! Nulla eaque alias perspiciatis aliquid earum magnam, molestiae id deleniti, aperiam dignissimos velit similique corrupti repellendus error delectus molestias eum? Eaque dolores officia odio vero incidunt perferendis, ab obcaecati earum quaerat, praesentium quis consequatur atque quas inventore sapiente doloremque possimus ducimus mollitia asperiores dicta! Eos nisi harum maiores vel ipsum, distinctio saepe unde aliquam. Sit officia eaque perspiciatis fugit asperiores praesentium? Odit, maiores? Deserunt amet sequi quod aliquam veniam voluptatum recusandae illo odio laudantium commodi vitae blanditiis, sunt cum ex illum eaque! Dicta atque dolore nemo molestiae quas quo harum alias obcaecati quisquam! Illum, sunt omnis quaerat nisi modi accusamus nemo optio quos obcaecati itaque. Accusantium omnis illum quisquam praesentium quod consequuntur. Optio quis, adipisci quam non cum esse cupiditate omnis ex sit! Ea quisquam tempore voluptates quis esse, incidunt quam magni illo ullam in rem vel velit ipsum officiis earum voluptatibus natus nostrum voluptatem pariatur fuga quibusdam soluta deserunt molestias? Dignissimos repellat aperiam architecto esse rem dolor labore officia fugiat cumque iure, repellendus aliquam quo soluta rerum eligendi porro recusandae, amet, eum suscipit voluptates omnis!</p>
         
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
