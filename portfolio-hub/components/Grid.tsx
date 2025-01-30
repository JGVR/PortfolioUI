import { Fragment } from "react";
import { FaGithub } from "react-icons/fa";

interface IGridProp{
    title: string
    status: string
    showProgressBar: boolean
    progressBarPercentage?: number
}

export default function Grid({title, status, showProgressBar, progressBarPercentage}: IGridProp){
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
                        <div className="flex flex-row mt-1 p-2">
                            <div className="h-3 w-full rounded-xl bg-gradient-to-r from-amber from-80% to-gray-500 to-20%"></div>
                        </div>
                        <div className="flex flex-row-reverse">
                            <h3 className="text-white">80%</h3>
                        </div>
                    </Fragment>
                    :
                    null
                }
            </div>
        </div>
    );
}