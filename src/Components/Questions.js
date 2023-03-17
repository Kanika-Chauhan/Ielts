import React from 'react'

const Questions = (props) => {
    const questions = [
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
  return (
    <div>
      {props.alert(questions)}
    </div>
  )
}

export default Questions


