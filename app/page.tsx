"use client";
import data from "@/data/questions.json";

export default function Home() {
  
    
    let score=0;
    
    function checkAnswer(elem){
        // console.log(elem.value);
        // console.log( elem.getAttribute('data-ans'));

        if( elem.value===elem.getAttribute('data-ans') ){ score++; }
        console.log(score);
    }

  return (
    <div className="container mx-auto p-3">
      <header className="p-3">
            <h1 className="text-5xl font-bold">Next JS Quiz</h1>
      </header>
      <main className="p-3">
        <h2 className="text-3xl font-bold">Questions:</h2>
        <p className="my-3">There are {data.length} questions in this quiz.</p>
        {
          data.map((elem)=>(
              <div key={elem.id} className="border p-2">
                <h3 className="text-3xl font-bold my-3">Question {elem.id} : <small>{elem.question}</small></h3>
                <div className="my-3">
                  <h4 className="text-2xl">Answers: Choose One</h4>
                  <div>
                    { elem.options.map((ques,ind)=>(
                      <div key={ind} className="my-2">
                        <label className="me-3" >
                          <input type="radio" name={'Q'+elem.id} onChange={(e)=>checkAnswer(e.target)} value={ques} data-ans={elem.answer} /> : {ques} </label>
                        </div>
                    )) }
                  </div>
                </div>
              </div>
          ))
        }

      </main>
      <footer className="p-3 text-center">
        <p>Site by: Avinash Malhotra</p>
      </footer>
    </div>
  );
}
