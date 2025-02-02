import projectTestData from "@/placeholder/projectTestData";
import Grid from "./Grid";
import { Fragment } from "react";

export default function ProjectGrid(){
    return(
        <div className="grid grid-cols-4 w-full h-full p-4 gap-x-3 gap-y-4 min-h-52 max-h-52">

            {/*Header*/}
            <div className="flex flex-row col-span-4 rounded-xl p-4 gap-x-4 justify-start border border-white">
                <div className="flex flex-col border-r border-white min-w-[10%]">
                    <h1 className="text-xl font-bold font-sans">Projects</h1>
                    <h2 className="mt-2 text-lg">12</h2>
                </div>
                <div className="flex flex-col border-r border-white min-w-[10%] justify-start">
                    <h1 className="text-xl font-bold font-sans">Completed</h1>
                    <h2 className="mt-2 text-lg">12</h2>
                </div>
                <div className="flex flex-col border-r border-white min-w-[10%] justify-start">
                    <h1 className="text-xl font-bold font-sans">In Progress</h1>
                    <h2 className="mt-2 text-lg">12</h2>
                </div>
                <div className="flex flex-col flex-grow min-w-[10%]">
                    <h1 className="text-xl font-bold font-sans">Search</h1>
                    <input className="p-2 mt-2 text-prussian-blue w-full rounded-xl" placeholder="search..."/>
                </div>
            </div>

            {/*Content*/}
            {
                projectTestData.map((project, idx) => ( 
                    <Grid title={project.name} status="Status" showProgressBar={true} progressBarPercentage={20} footer={project.badges} key={idx}/>
                ))
            }
        </div>
    )
}