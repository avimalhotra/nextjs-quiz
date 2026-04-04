"use client"

import Link from 'next/link';
import data from "@/data/questions.json";
import { useSearchParams } from 'next/navigation';


export default function ResultPage(){

     const searchParams = useSearchParams();
     const score = searchParams.get('score') || "";
     
     return (
          <>
               <h1 className="text-4xl font-bold">Result</h1>
               <p className="my-3">Score: {score} out of {data.length}</p>
               <p>Back to <Link className='text-blue-400' href="/">Quiz</Link></p>
          </>
     )
}