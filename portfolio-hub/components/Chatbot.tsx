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

interface IChatBot{
    isRefreshed: boolean;
    setIsRefreshed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Chatbot({isRefreshed, setIsRefreshed}: IChatBot){
    const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
    const [message, setMessage] = useState("");
    const [humanMsg, setHumanMsg] = useState<HumanMessage>();
    const [isCompleted, setIsCompleted] = useState(true);
    const socketRef = useRef<WebSocket | null>(null);
    let messageType: string;
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const chatContentDivRef = useRef<HTMLDivElement | null>(null);
    const [isReceived, setIsReceived] = useState(true);


    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
          // Reset height to allow shrink on delete
          textarea.style.height = "40px";
    
          // Adjust height to scroll height, up to max height
          textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
        }
    };

    //scroll chat message content to the bottom
    const scrollChatContentBottom = () => {
        if(chatContentDivRef.current){
            chatContentDivRef.current.scrollTop = chatContentDivRef.current.scrollHeight;
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        adjustHeight();
        setMessage(e.target.value);
    };

    const onSend = (e: React.KeyboardEvent<HTMLTextAreaElement> | React.MouseEvent<SVGElement>) => {
        if("key" in e){
            if(e.key == "Enter" && !e.shiftKey){
                e.preventDefault(); //prevents textarea from going to next line
                const humanMessage = new HumanMessage(new Question(message));
                const chatMsg = new ChatMsg(humanMessage);
                setChatMessages((prevMsgs) => [...prevMsgs, chatMsg]);
                setHumanMsg(humanMessage);
                setMessage("");
            }
        }else{
            const humanMessage = new HumanMessage(new Question(message));
            const chatMsg = new ChatMsg(humanMessage);
            setChatMessages((prevMsgs) => [...prevMsgs, chatMsg]);
            setHumanMsg(humanMessage);
            setMessage("");
        }
    };

    //Initialize socket on component mounting
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
    }, []);

    //Send "qa" event to WS endpoint when client types a question
    useEffect(() => {
        if(humanMsg && socketRef.current?.readyState === WebSocket.OPEN){
            //open ws connection
            const req = {event: "qa", question: humanMsg?.question.text};
            socketRef.current.send(JSON.stringify(req));
            setIsCompleted(false);
            var answer = new Answer("", humanMsg.question.text);
            var aiMsg = new AIMessage(answer);
            setChatMessages((prevMsg) => [...prevMsg, new ChatMsg(aiMsg)]);
            setIsReceived(false);
        }
    }, [humanMsg]);

    //Receive ws message everytime chatMessages is updated
    useEffect(() => {
        try{
            //receive ws event if there's a human msg and if ws connection is open
            if(humanMsg && socketRef.current?.readyState === WebSocket.OPEN){
                socketRef.current.onmessage = (event) => {
                    const wsEvent = JSON.parse(event.data);
                    setIsReceived(true);

                    //"qa" event streams chatbot response
                    if(wsEvent.event == "qa"){
                        const result: QaEvent = JSON.parse(event.data);
                        const answer = new Answer(result.text, result.question);
                        const aiMessage = new AIMessage(answer);

                        //If last message is aiMessage, update chatMessages last message with the ai model answer as it is fetch from api
                        //Otherwise add aiMessage to chatMessages
                        if(chatMessages[chatMessages.length-1].aiMessage != null){
                            setChatMessages((prevMsg) => {
                                const msgs = [...prevMsg];
                                const lastMsg = msgs[msgs.length-1]
                                const newMsg = lastMsg.aiMessage?.answer.text + aiMessage.answer.text;
                                const newAnswer = new Answer(
                                    newMsg,
                                    lastMsg.aiMessage?.answer.question
                                )
                                msgs[msgs.length-1] = new ChatMsg(new AIMessage(newAnswer));
                                return msgs;
                            });
                        }else{
                            setChatMessages((prevMsgs) => [...prevMsgs, new ChatMsg(aiMessage)]);
                        }
                    }else{
                        //"answer" event has complete answer + question
                        const result: AnswerEvent = JSON.parse(event.data);
                        setIsCompleted(result.message.completed);
                        console.log(result.message.completed);
                    }
                }
                scrollChatContentBottom(); 
            }
        }catch(error){
            setIsCompleted(true);
            setIsReceived(false);
            socketRef.current?.close();
        }
    }, [chatMessages]);

    //reset chatbot messages
    useEffect(() => {
        if(isRefreshed){
            setChatMessages([]);
            setIsRefreshed(!isRefreshed);
        }
    }, [isRefreshed])


    return(
        <Fragment>
            <div className="relative flex flex-col w-full h-full">
                {/* Scrollable Chat Content */}
                <div ref={chatContentDivRef}
                    className="flex-grow overflow-y-scroll p-2 mb-24">
                    {chatMessages.map((m, idx) => (
                        <ChatMessage chatMsg={m} key={idx} isReceived={isReceived}/>
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
                            disabled={!isCompleted}
                        />
                        <IoMdSend className="h-8 w-8 text-prussian-blue ml-2 cursor-pointer hover:opacity-40" onClick={onSend}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}