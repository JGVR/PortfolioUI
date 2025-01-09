import { Fragment, useEffect, useState } from "react";
import { IoIosCloseCircleOutline, IoMdRefresh } from "react-icons/io";
import Answer from "@/models/answer";
import Question from "@/models/question";
import ChatEvent from "@/models/chat-event";

interface ModalStruct{
    children: React.ReactNode
}

export default function ChatBotModal({children}: ModalStruct){
    const [isModalOpen, setModalOpen] = useState(true);

    const onClose = () => {
        setModalOpen(!isModalOpen);
    };

    if(!isModalOpen){
        return null;
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-2/3 max-h-[80vh] overflow-auto">
                {/*Modal Header*/}
                <div className="flex flex-row items-center border-b border-gray-400 w-full h-[14%] gap-1">
                    <h2 className="text-xl font-bold ml-4 text-black grow">Friday Juan's Assistant</h2>
                    <IoMdRefresh className="h-10 w-10 text-prussian-blue cursor-pointer hover:opacity-40"/>
                    <IoIosCloseCircleOutline className="h-10 w-10 text-prussian-blue mr-2 cursor-pointer hover:opacity-40" onClick={onClose}/>
                </div>
                
                {/*Modal Content*/}
                <div className="flex flex-col w-full h-[72%] overflow-x-scroll">
                    {children}
                </div>
                {/*Modal Footer*/}
                <div className="flex flex-row items-center border-t border-gray-400 w-full h-[14%]">
                    <h2 className="text-sm font-bold ml-4 text-black">Powered By ChatGPT 4o</h2>
                </div>
            </div>
        </div>
    )
}