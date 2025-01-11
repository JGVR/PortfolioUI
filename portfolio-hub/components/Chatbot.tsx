import { Fragment, useRef } from "react";
import { useState, useEffect } from "react";
import Answer from "@/models/answer";
import Question from "@/models/question";
import ChatEvent from "@/models/chat-event";
import ChatMessage from "./ChatMessage";
import { IoMdSend } from "react-icons/io";

export default function Chatbot(){
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [questions, setQuestions] = useState<Question>();
    const [message, setMessage] = useState("");
    let question: Question;
    const qa = {
        event: "qa",
        question: "Who is Juan?"
    };

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
          // Reset height to allow shrink on delete
          textarea.style.height = "40px";
    
          // Adjust height to scroll height, up to max height
          textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        adjustHeight();
        setMessage(e.target.value);
        console.log(message);
    }

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

    useEffect(() => {
        question = new Question(message);
        console.log(question);
    }, [message])

    return(
        <Fragment>
            <div className="relative flex flex-col w-full h-full">
                {/* Scrollable Chat Content */}
                <div className="flex-grow overflow-y-scroll p-2 mb-24">
                    <ChatMessage />
                </div>

                {/* Fixed Textarea at Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-2 bg-white">
                    <div className="flex items-center">
                        <textarea
                        ref={textareaRef}
                        className="h-10 max-h-[100px] w-[92%] border rounded-3xl p-2 text-black resize-none overflow-auto"
                        placeholder="Ask Friday..."
                        onChange={onChange}
                        value={message}
                        />
                        <IoMdSend className="h-8 w-8 text-prussian-blue ml-2 cursor-pointer hover:opacity-40" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}