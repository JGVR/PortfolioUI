import { Fragment } from "react";
import { FaGithub } from "react-icons/fa";

interface IGridProp{
    title: string
    status: string
    footer: any[]
    showProgressBar: boolean
    progressBarPercentage?: number
}

export default function Grid({title, status, showProgressBar, progressBarPercentage=0}: IGridProp){
    return(
        <div className="flex flex-row border border-white rounded-xl h-40">
            <div className="flex flex-col w-full h-full p-2">
                <div className="flex flex-row w-full h-[40%]">
                    <h3 className="text-white text-lg flex-1">{title}</h3>
                    <FaGithub className="h-8 w-8 text-white"/>
                </div>
                <div className="flex flex-row-reverse">
                    <h3 className="text-white">{status}</h3>
                </div>
                {
                    showProgressBar === true ?
                    <Fragment>
                        <div className="flex flex-row h-3 bg-gray-500 rounded-xl overflow-hidden">
                            <div className="h-full bg-amber" style={{width: `${progressBarPercentage}%`}}></div>
                        </div>
                        <div className="flex flex-row-reverse">
                            <h3 className="text-white">{progressBarPercentage}%</h3>
                        </div>
                    </Fragment>
                    :
                    null
                }

                {/*FOOTER*/}
                <div className="flex flex-row gap-2 h-8 w-8 ml-2">
                    {/*change to a for loop */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                </div>
            </div>
        </div>
    );
}