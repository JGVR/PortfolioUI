import Grid from "./Grid";
import config from "@/config";
import Project from "@/models/project";
import ProjectFetcher from "@/services/project-fetcher";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFilters from "@/models/category-filters";
import CategoryFilterBuilder from "@/services/category-filter-builder";

export default function ProjectGrid(){
    const fetcher = new ProjectFetcher();
    const [projects, setProjects] = useState<Array<Project>>([]);
    const [categoryFilters, setCategoryFilters] = useState<Array<CategoryFilters>>([]);

    useEffect(() => {
        const loadProjectData = async () => {
            console.log(`API URL: ${config.apiUrl}`);
            const data = await fetcher.call(config.apiUrl ?? "", 10, 0);
            setProjects(data);
        } 

        loadProjectData();
    }, [])

    //Build the Category filters for the search bar
    useEffect(() => {
        if(projects.length > 0){
            const badgeNames: Set<string> = new Set(
                projects.flatMap((project) => project.badges.map((badge) => badge.name))
            );
            setCategoryFilters((prevMsgs) => [...prevMsgs, CategoryFilterBuilder.build("Skills", badgeNames)]);
        }
    }, [projects])

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
                    <h1 className="text-xl font-bold font-sans mb-2">Search</h1>
                    <SearchBar filters={[]} text=""/>
                </div>
            </div>

            {/*Content*/}
            {
                projects.map((project, idx) => (
                    <Grid title={project.name} status="Status" showProgressBar={true} progressBarPercentage={20} footer={project.badges} key={idx}/>
                ))
            }
        </div>
    )
}