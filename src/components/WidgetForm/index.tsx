import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/ideia.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";



export const feedbackTypes = {
  BUG:{
    title: "Problema",
    image:{
      source: bugImageUrl,
      alt:'Imagem de um inseto',
    },
  },
  IDEIA: {
    title: "Ideia",
    image:{
      source: ideiaImageUrl,
      alt:'Imagem de uma lâmpada',
    },
  },
  OTHER:{
    title: "Outro",
    image:{
      source: thoughtImageUrl,
      alt:'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm(){

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center  shadow-lg w-[calc(100vh-2rem)] md:w-auto">

    {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/> 
    ) : (
        <>
        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
              <FeedbackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={()=> setFeedbackSent(true)}
              />
          )}
        </>
    
    )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className='underline underline-offset-2' href='https://www.rocketseat.com.br/' target='_blank'>Rocketseat</a> 
      
      </footer>

    </div>
  );
}