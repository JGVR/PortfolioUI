import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"

interface DownloadBttnProp{
    title?: string
}

export default function DownloadBttn({title}: DownloadBttnProp){
    return(
        <div className="flex flex-col rounded-full w-20 h-20 justify-center items-center bg-lapis-lazuli hover:bg-celestial-blue mt-48">
                {/*This needs to be a button than when click downloads PDF from Azure Blob*/}
                <ArrowDownTrayIcon className="text-amber w-10 h-10"/>
                <h1 className="text-amber text-lg font-sans">{title}</h1>
        </div>
    )
}