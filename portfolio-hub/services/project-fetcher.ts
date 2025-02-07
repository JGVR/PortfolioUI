import IFetcher from "@/contracts/fetcher.interface";
import Project from "@/models/project";

export default class ProjectFetcher implements IFetcher<Project>{

    async call(source: string, max: number, skip: number): Promise<Array<Project>>{
        try{
            console.log(`API URL: ${source}`);
            const fullUrl = `${source}find/?type=project&userId=1`;
            const resp = await fetch(fullUrl);

            if(!resp.ok){
                throw new Error(`HTTP Error: Something went wrong ${resp.status}`)
            }
            const data: Project[] = await resp.json();
            return data;
        }
        catch(error){
            console.log(`Something went wrong: ${error}`);
            throw new Error("Something failed");
        }
    }
}