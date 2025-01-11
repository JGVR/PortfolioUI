import { Fragment } from "react";
import { GoDependabot } from "react-icons/go";
import { CiUser } from "react-icons/ci";

export default function ChatMessage(){
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