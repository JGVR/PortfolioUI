import { Fragment, useRef, useState, useEffect } from "react";
import Answer from "@/models/answer";
import Question from "@/models/question";
import QaEvent from "@/models/qa-event";
import AnswerEvent from "@/models/answer-event";
import ChatMessage from "./ChatMessage";
import { IoMdSend } from "react-icons/io";
import HumanMessage from "@/models/human-message";
import AIMessage from "@/models/ai-message";
import ChatMsg from "@/models/chat-message";

export default function Chatbot(){
    //const [humanMessage, setHumanMessage] = useState<HumanMessage>();
    //const [AIMessage, setAIMessage] = useState<AIMessage>();
    const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
    const [message, setMessage] = useState("");
    const [humanMsg, setHumanMsg] = useState<HumanMessage>();
    const socketRef = useRef<WebSocket | null>(null);
    let messageType: string;

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
    };

    const onSend = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key == "Enter" && !e.shiftKey){
            e.preventDefault(); //prevents textarea from going to next line
            const humanMessage = new HumanMessage(new Question(message));
            setHumanMsg(humanMessage);
            const chatMsg = new ChatMsg(humanMessage);
            setChatMessages((prevMsgs) => [...prevMsgs, chatMsg]);
            setMessage("");
        }
    };

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8500/ws/chat/");
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("Connection established!");
        }

        socket.onclose = () => {
            console.log("Connection closed");
        };

        return () => {
            socket.close();
        }
    }, [])

    //for testing at the moment:
    useEffect(() => {
        console.log(humanMsg);
        if(humanMsg && socketRef.current?.readyState === WebSocket.OPEN){
            //open ws connection
            const req = {event: "qa", question: humanMsg?.question.text};
            socketRef.current.send(JSON.stringify(req));
            console.log(JSON.stringify(req));

            socketRef.current.onerror = (error) => {
                console.error("WebSocket error:", error);
              };

            //on ws message
            socketRef.current.onmessage = (event) => {
                const wsEvent = JSON.parse(event.data);
                try{
                    if(wsEvent.event == "qa"){
                        const result: QaEvent = JSON.parse(event.data);
                        console.log(`qa event: ${result.text}`);
                    }else{
                        console.log(`Event data: ${event.data}`)
                        const result: AnswerEvent = JSON.parse(event.data);
                        console.log("this executed");
                        //console.log(result.message);
                    } 
                }catch(error){
                    console.log(error);
                    socketRef.current?.close();
                }
             }
        }
    }, [humanMsg])

    return(
        <Fragment>
            <div className="relative flex flex-col w-full h-full">
                {/* Scrollable Chat Content */}
                <div className="flex-grow overflow-y-scroll p-2 mb-24">
                    {chatMessages.map((m, idx) => (
                        <ChatMessage chatMsg={m} key={idx}/>
                    ))}
                </div>

                {/* Fixed Textarea at Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-2 bg-white">
                    <div className="flex items-center">
                        <textarea
                        ref={textareaRef}
                        className="h-10 max-h-[100px] w-[92%] border rounded-3xl p-2 text-black resize-none overflow-auto"
                        placeholder="Ask Friday..."
                        onChange={onChange}
                        onKeyDown={onSend}
                        value={message}
                        />
                        <IoMdSend className="h-8 w-8 text-prussian-blue ml-2 cursor-pointer hover:opacity-40" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}