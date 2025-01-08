import { Fragment, useEffect, useState } from "react";
import { IoIosCloseCircleOutline, IoMdRefresh } from "react-icons/io";
import { GoDependabot } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import Answer from "@/models/answer";
import Question from "@/models/question";

export default function ChatBotModal(){
    const [isModalOpen, setModalOpen] = useState(true);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [questions, setQuestions] = useState<Question>();

    const onClose = () => {
        setModalOpen(!isModalOpen);
    }

    if(!isModalOpen){
        return null;
    }

    //for testing at the moment:
    useEffect(() => {
        setQuestions(new Question("Who is Juan"));
        setAnswers((prevAnswer) => [...prevAnswer, new Answer("hello! I'm friday", new Question("Who is Juan"), true)]);
    }, [])

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
                    {answers.map((a, idx) => (
                        <Fragment key={`chatbot-qa-${idx}`}>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-row items-center ml-3">
                                    <GoDependabot className="w-8 h-8 text-lapis-lazuli mb-1"/>
                                    <h3 className="text-black ml-2">Friday</h3>
                                </div>
                                <p className="text-white max-w-[70%] h-auto bg-prussian-blue rounded-xl p-3">
                                {a.text}
                                </p>
                            </div>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-row items-center justify-end mr-3">
                                        <CiUser className="w-8 h-8 text-lapis-lazuli mb-1"/>
                                        <h3 className="text-black ml-1">You</h3>
                                </div>
                                <div className="flex flex-row items-center justify-end">
                                    <p className="text-white max-w-[70%] h-auto bg-prussian-blue rounded-xl p-3">
                                        {a.question.text}
                                    </p>
                                </div>
                            </div>           
                        </Fragment>
                    ))}     
                </div>
                {/*Modal Footer*/}
                <div className="flex flex-row items-center border-t border-gray-400 w-full h-[14%]">
                    <h2 className="text-sm font-bold ml-4 text-black">Powered By ChatGPT 4o</h2>
                </div>
            </div>
        </div>

    )
}