import React, {useState} from 'react';


const App = () =>{
  const Text = [
     
    {
      WriteQustion : " Whenever user opens any website then main page is called as ______?",
      AnsQution : [
        {ansText: "Home Page" , isRight : true },
        {ansText: "Backend Page" , isRight: false},
        {ansText: " Dead End ", isRight : false},
        {ansText: "None of these", isRight : false}
      ]},

      {
        WriteQustion : "Which of the following language is used to write animation and games in browser ?",
        AnsQution : [
          {ansText: "Java" , isRight : true },
          {ansText: "HTML" , isRight: false},
          {ansText: " C-Programming", isRight : false},
          {ansText: "None of these ", isRight : false}

        ]},

        {
          WriteQustion : " Which of these festivals is not celebrated on a full moon?",
          AnsQution : [
            {ansText: "BuDh Jayanti" , isRight : false },
            {ansText: " Raksha Bandhan" , isRight: false},
            {ansText: "Holika Dahan ", isRight : false},
            {ansText: "Janmashtami", isRight : true}
         
  
          ]},

          {
            WriteQustion : "Which of these freedom fighters is known popularly as “Netaji”?",
            AnsQution : [
              {ansText: "Subhash Chandra Bose" , isRight : true },
              {ansText: "M. K. Gandhi" , isRight: false},
              {ansText: "Vallabhai Patel ", isRight : false},
              {ansText: "B. R. Ambedkar", isRight : false}
            ]},

            {
              WriteQustion : " Who was appointec Chairman of the Press Council of India in 2011? ?",
              AnsQution : [
                {ansText: "Ustice P. B. Sawant" , isRight : false },
                {ansText: "Ustice Santosh Hegde" , isRight: false },
                {ansText: "Justice K. G. Balakrishnan", isRight : false},
                {ansText: "Justice Markendey Katju", isRight : true}
              ]},

              
        ]

        const [CQ , setCq] = useState(0);
        const [ShowScore , setShowscore] = useState(false);
        const [score, setScore] = useState(0);
   

        const Click= (isRight) =>{
          if (isRight) {
            setScore( score + 1);
          }
         
          const nxtQ = CQ + 1 ;
          if (nxtQ < Text.length){
            setCq(nxtQ);
          }else {
            setShowscore(true);
          }

        };

        return (
          <div className='app'>
            {ShowScore ? (
              <div className='score-section'>
                You Scored {score} out of {Text.length} 
              </div>
            ) : (
              <>
                <div className='question-section'>
                
                  <div className='question-count'>
                    <span>Question {CQ + 1}</span>/{Text.length}
                  </div>
                  <div className='question-text'>{Text[CQ].WriteQustion}</div>
                </div>
                <div className='answer-section'>
                  {Text[CQ].AnsQution.map((AnsQution) => (
                    <button onClick={() => Click(AnsQution.isRight)}>{AnsQution.ansText}</button>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      }
export default App;