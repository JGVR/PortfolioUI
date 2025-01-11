import { Fragment, useRef } from "react";
import { useState, useEffect } from "react";
import Answer from "@/models/answer";
import Question from "@/models/question";
import ChatEvent from "@/models/chat-event";
import ChatMessage from "./ChatMessage";

export default function Chatbot(){
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [questions, setQuestions] = useState<Question>();
    const qa = {
        event: "qa",
        question: "Who is Juan?"
    };

    //for testing at the moment:
    useEffect(() => {
        /*const socket = new WebSocket("ws://localhost:8500/ws/chat/");
        socket.onopen = () => {
            console.log("Connection established");
            socket.send(JSON.stringify(qa));
            console.log(JSON.stringify(qa));
        };
        
        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
          };

        socket.onclose = () => {
            console.log("Connection closed");
        };

        socket.onmessage = (event) => {
           try{
            const result: ChatEvent = JSON.parse(event.data);
            console.log(result);
           }catch(error){
            console.log(error);
            socket.close();
           }
        }*/

        setQuestions(new Question("Who is Juan"));
        setAnswers((prevAnswer) => [...prevAnswer, new Answer("hello! I'm friday", new Question("Who is Juan"), true)]);

        /*return () => {
            socket.close();
        }*/
    }, [])

    return(
        <Fragment>
            <div className="relative flex flex-col w-full h-full">
                <ChatMessage/>
            </div>
        </Fragment>
    )
}