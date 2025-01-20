import { GoDependabot } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import ChatMsg from "@/models/chat-message";

interface ChatMessageStruct{
    chatMsg: ChatMsg;
    isAnswerReceived: boolean;
}

export default function ChatMessage({chatMsg, isAnswerReceived}: ChatMessageStruct){

    if(chatMsg.humanMessage !== undefined){
        return(
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center justify-end mr-3">
                        <CiUser className="w-8 h-8 text-lapis-lazuli mb-1"/>
                        <h3 className="text-black ml-1">You</h3>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <p className="text-white max-w-[70%] h-auto bg-prussian-blue rounded-xl p-3">
                        {chatMsg.humanMessage?.question.text}
                    </p>
                </div>
            </div> 
        )
    }else{
        return(
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center ml-3">
                    <GoDependabot className="w-8 h-8 text-lapis-lazuli mb-1"/>
                    <h3 className="text-black ml-2">Friday</h3>
                </div>
                {
                    chatMsg.aiMessage?.answer.text === "" && !isAnswerReceived ?
                    <div className="flex justify-start items-center space-x-1">
                        <h3 className="text-prussian-blue">Thinking</h3>
                        <div className="w-2 h-2 bg-prussian-blue rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-prussian-blue rounded-full animate-bounce [animation-delay:200ms]"></div>
                        <div className="w-2 h-2 bg-prussian-blue rounded-full animate-bounce [animation-delay:300ms]"></div>
                    </div> :
                    <p className="text-white max-w-[70%] h-auto bg-prussian-blue rounded-xl p-3">
                        {chatMsg.aiMessage?.answer.text}
                    </p>
                }
            </div>
        )
    }
}