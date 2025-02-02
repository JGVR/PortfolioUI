import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoMdRefresh } from "react-icons/io";
import Chatbot from "./Chatbot";

interface IChatBotModal{
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChatBotModal({isVisible, setIsVisible}: IChatBotModal){
    const [isRefreshed, setIsRefreshed] = useState(false);

    const onClose = () => {
        setIsVisible(!isVisible);
    };

    const onRefresh = () => {
        setIsRefreshed(true);
    };

    if(!isVisible){
        return null;
    }

    if(isVisible){
        return(
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
                {/*MODAL*/}
                <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-3/4 max-h-[90vh]" onClick={(e) => (e.stopPropagation())}>
                    {/*Modal Header*/}
                    <div className="flex flex-row items-center border-b border-gray-400 w-full h-[10%] gap-1">
                        <h2 className="text-xl font-bold ml-4 text-black grow">Friday Juan's Assistant</h2>
                        <IoMdRefresh className="h-10 w-10 text-prussian-blue cursor-pointer hover:opacity-40" onClick={onRefresh}/>
                        <IoIosCloseCircleOutline className="h-10 w-10 text-prussian-blue mr-2 cursor-pointer hover:opacity-40" onClick={onClose}/>
                    </div>
                    
                    {/*Modal Content*/}
                    <div className="relative w-full h-[80%] border-t border-gray-500 overflow-hidden overflow-y-scroll">
                        <Chatbot isRefreshed={isRefreshed} setIsRefreshed={setIsRefreshed}/>
                    </div>
                    {/*Modal Footer*/}
                    <div className="flex flex-row items-center justify-start w-full h-[10%] max-h-[10%] p-4">
                        <h3 className="text-prussian-blue italic opacity-60">Powered by ChatGPT 4o</h3>
                    </div>
                </div>
            </div>
        );
    }
    
    return null;
}