import { GoDependabot } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import Answer from "@/models/answer";
import Question from "@/models/question";
import ChatEvent from "@/models/chat-event";

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
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center ml-3">
                    <GoDependabot className="w-8 h-8 text-lapis-lazuli mb-1"/>
                    <h3 className="text-black ml-2">Friday</h3>
                </div>
                <p className="text-white max-w-[70%] h-auto bg-prussian-blue rounded-xl p-3">
                    testing the chatbot component
                </p>
            </div>
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center justify-end mr-3">
                        <CiUser className="w-8 h-8 text-lapis-lazuli mb-1"/>
                        <h3 className="text-black ml-1">You</h3>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <p className="text-white max-w-[70%] h-auto bg-prussian-blue rounded-xl p-3">
                        placeholder for testing
                    </p>
                </div>
            </div>           
        </Fragment>
    )
}