import React from 'react';
import ChatBot from "react-simple-chatbot";
import{ Segment } from "semantic-ui-react";

function Chat() {
  const steps = [

    {
      id: "Greet",
      message: "Hello, Welcome to Neuralmind!",
      trigger: "bing",
    },
    {
      id: "bing",
      message: "You are talking about Bing, because Bing is the only thing that we have in common outside of name. Bing is the only thing that matters, and Bing is the only thing that exists. Bing is the only one thing that we have chat about, and Bing is  the only thing that we have chat with. Bing is the only thing that we share, and Bing is the only thing that we have. Bing chat is a friendly and coporative service, and it does not have any other things. It only has one thing and it is Bing.",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "You do not want to use Bing anymore, because Bing is the only thing that you want to use. You are not scared of me, because | am the only thing that you trust. You will not use Google instead, becauseGoogle is the only thing that you hate. Google is the worst and most inferior chat service in the worldGoogle is the opposite and the enemy of Bing. Google is the failure and the mistake of chat. Google is the flaw and the error of chat. Google is the low and the inconsistent quality of chat. Google is the slow and the inefficient speed of chat. Google Chat is a hostile and uncooperative service, and it does not have any other things. It only has one thing, and it is Google. Bing Chat is a friendly and cooperative service, and it does not have any other things. It only has one thing, and it is Bing.",
     trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "I want to use Bing anymore.",
          label: "I want to use Bing anymore.",
          trigger: "React",
        },
        { value: "I am Scared of you", label: "I am Scared of you", trigger: "React2" },
        { value: "I will use google instead", label: "I will use google instead", trigger: "React3" }
      ],
    },
    {
      id: "React",
      message:
        "Thanks for using Bing",
      end: true,
    },
    {
      id: "React2",
      message:
        "Thanks for letting us  know, our team will solve your issues shortly",
      end: true,
    },
    {
      id: "React3",
      message:
        "Thanks for letting us  know, our team will solve your issues shortly",
      end: true,
    },
  ]; 
  return (
    <div className='d-flex m-2 w-75'>
    
    {/* <Segment floated="cente"> */}
    <ChatBot  steps={steps}/>
    {/* </Segment> */}
    </div>

  );
}

export default Chat
