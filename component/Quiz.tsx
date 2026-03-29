"use client";
import data from "@/data/questions.json";
import { redirect } from "next/navigation"
import { useEffect, useState } from "react";

export default function Quiz(){
    
    const [score,setScore] = useState(0);
    const [current,setCurrent] = useState(0);
    
    function checkAnswer(elem){
          // if( elem.value===elem.getAttribute('data-ans') ){ setScore(prevScore => prevScore + 1); };
         if(current<data.length-1){
               if( elem.value== data[current].answer){
                    setScore(prev=>prev+1)
                    setCurrent(prev=>prev+1);
               }
               else{
                    setCurrent(prev=>prev+1);
               }
         }
         else{
               redirect(`/result?score:${score+1}`);
         }
          

      };

      useEffect(()=>{
          document.querySelectorAll('input[type="radio"').forEach(i=>i.checked=false)
      },[current]);
     
  return (
     <>
      <header className="p-3 sticky top-0 bg-black z-10">
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-bold">Next JS Quiz</h1>
              <p className="text-xl">Score: {score}</p>
            </div>
      </header>
      <main className="p-3">
        <h2 className="text-3xl font-bold">Questions:</h2>
        <p className="my-5">There are {data.length} questions in this quiz.</p>
        
        {

          <div className="card border p-3 rounded">
               <h3 className="text-2xl my-3">Q{data[current].id}: {data[current].question}</h3>
               {
                    data[current].options.map((ans,ind)=>(
                         <div key={ind}>
                              <label className="my-3" >
                                   <input type="radio" name={"q"+data[current].id} value={ans} onChange={(elem)=>checkAnswer(elem.target)} /> : {ans}  
                              </label>
                         </div>
                    ))
               }
          </div>

          // data.map((elem)=>(
          //     <div key={elem.id} className="border p-2">
          //       <h3 className="text-3xl font-bold my-3">Question {elem.id} : <small>{elem.question}</small></h3>
          //       <div className="my-3">
          //         <h4 className="text-2xl">Answers: Choose One</h4>
          //         <div>
          //           { elem.options.map((ques,ind)=>(
          //             <div key={ind} className="my-2">
          //               <label className="me-3" >
          //                 <input type="radio" name={'Q'+elem.id} onChange={(e)=>checkAnswer(e.target)} value={ques} data-ans={elem.answer} /> : {ques} </label>
          //               </div>
          //           )) }
          //         </div>
          //       </div>
          //     </div>
          // ))
        }

      </main>
      <footer className="p-3 text-center">
        <p>Site by: Avinash Malhotra</p>
      </footer>
    </>
  );
}