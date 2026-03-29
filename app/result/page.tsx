"use client"


import { useSearchParams } from 'next/navigation'


export default function Result(){
     // const { searchParams } = await new URL(request.url);
     // const score = searchParams.get('score');
     
     // const search = location.search;
     //  const params = new URLSearchParams(search);
     // const score=params.get('score'); 

     const searchParams = useSearchParams();
     const score = searchParams.get('score');

     console.log(score);

     return (
          <div className="container mx-auto p-3">
               <h1 className="text-4xl font-bold">Result</h1>
               <p className="my-3">Score: {score}</p>
          </div>
     )
}