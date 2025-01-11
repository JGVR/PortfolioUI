import { Fragment, useEffect, useState, useRef } from "react";
import { IoIosCloseCircleOutline, IoMdRefresh } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
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

    if(!isModalOpen){
        return null;
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            {/*MODAL    */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-3/4 max-h-[90vh] overflow-auto" onClick={(e) => (e.stopPropagation())}>
                {/*Modal Header*/}
                <div className="flex flex-row items-center border-b border-gray-400 w-full h-[10%] gap-1">
                    <h2 className="text-xl font-bold ml-4 text-black grow">Friday Juan's Assistant</h2>
                    <IoMdRefresh className="h-10 w-10 text-prussian-blue cursor-pointer hover:opacity-40"/>
                    <IoIosCloseCircleOutline className="h-10 w-10 text-prussian-blue mr-2 cursor-pointer hover:opacity-40" onClick={onClose}/>
                </div>
                
                {/*Modal Content*/}
                <div className="relative w-full h-[72%] overflow-hidden overflow-y-scroll">
                    {children}
                </div>
                {/*Modal Footer*/}
                <div className="flex flex-row items-center justify-start w-full h-[18%] max-h-[18%] p-2">
                    <textarea
                        ref={textareaRef}
                        className="h-10 max-h-[100px] w-[92%] border rounded-3xl p-2 text-black resize-none overflow-auto"
                        placeholder="Ask Friday..."
                        onInput={adjustHeight}
                    />
                    <IoMdSend className="h-10 w-10 text-prussian-blue ml-2"/>
                </div>
            </div>
        </div>
    )
}