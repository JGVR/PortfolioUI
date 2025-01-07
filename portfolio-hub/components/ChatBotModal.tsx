import { useState } from "react";

export default function ChatBotModal(){
    const [isModalOpen, setModalOpen] = useState(true);

    const onClose = () => {
        setModalOpen(!isModalOpen);
    }

    if(!isModalOpen){
        return null;
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-2/3 max-h-[80vh] overflow-auto">
                {/*Modal Header*/}
                <div className="flex flex-row items-center border-b border-gray-400 w-full h-[14%]">
                    <h2 className="text-xl font-bold ml-4 text-black">Modal Title</h2>
                </div>
                
                <div className="flex flex-col w-full h-[72%] bg-red-300 overflow-x-scroll">
                    <p className="text-black w-full h-auto bg-blue-400">
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                        This is the modal content.
                    </p>
                    <p className="text-black bg-yellow-300">This is the modal content.</p>
                </div>

                {/*Modal Header*/}
                <div className="flex flex-row items-center border-t border-gray-400 w-full h-[14%]">
                    <h2 className="text-sm font-bold ml-4 text-black">Powered By ChatGPT 4o</h2>
                </div>
            </div>
        </div>

    )
}