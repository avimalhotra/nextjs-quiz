"use client"

import { Suspense } from 'react';
import ResultPage from './resultContent';

export default function Result(){

     // const searchParams = useSearchParams();
     // const score = searchParams.get('score') || "";

     return (
          <div className="container mx-auto p-3">
               <Suspense fallback="Loading">
                    <ResultPage />
               </Suspense>
          </div>
     )
}