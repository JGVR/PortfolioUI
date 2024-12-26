import Link from "next/link";
import Image from "next/image";
import profileTestData from "@/placeholder/profileTestData";
import { MapPinIcon, CalendarDaysIcon, ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Profile(){
    return(
        <div className="grid grid-cols-2 grid-rows-[auto, auto, auto, 1fr] w-full p-4 gap-y-2">
            <div className="flex flex-col mt-5 justify-center items-center row-start-1 col-start-1 col-end-2">
                <h3 className="text-lg font-serif italic text-gray-300">Software Developer</h3>
                <h1 className="text-4xl text-white font-sans font-bold italic">Juan Vasquez</h1>
                <div className="flex flex-row mt-4">
                    <div className="w-10 bg-amber h-1 mt-7 ml-4"></div>
                    <p className="w-full text-gray-300 text-lg font-serif m-4">{profileTestData.shortBio}</p>
                </div>
            </div>
            <div className="flex flex-row ml-20 mr-4 row-start-1 row-end-4 col-start-2 col-end-3 justify-center items-center">
                <div className="flex flex-col rounded-full w-20 h-20 justify-center items-center bg-lapis-lazuli hover:bg-celestial-blue mt-48">
                    {/*This needs to be a button than when click downloads PDF from Azure Blob*/}
                    <ArrowDownTrayIcon className="text-amber w-10 h-10"/>
                    <h1 className="text-amber text-lg font-sans">CV</h1>
                </div>
                <Image className="border rounded-full"
                        src="https://stbc.blob.core.windows.net/portfolio-hub/JuanVasquez-Pic.jpeg"
                        alt="Juan Vasquez"
                        width={280}
                        height={280}/>
                <div className="flex flex-col rounded-full overflow-hidden justify-center items-center ml-2 mr-2 mt-20">
                    <span className="h-10 w-1 bg-amber mb-2"></span>
                    <Link href={profileTestData.linkedInUrl ? profileTestData.linkedInUrl : ""}>
                        <FaLinkedin className="h-8 w-8 text-white hover:text-amber rounded-full mb-2"/>
                    </Link>
                    <Link href={profileTestData.gitHubUrl ? profileTestData.gitHubUrl : ""}>
                        <FaGithub className="h-8 w-8 text-white hover:text-amber rounded-full mb-2"/>
                    </Link>
                </div>
            </div>

            {/*About me Section*/}
            <div className="flex flex-col justify-center items-center row-start-2 col-start-1 col-end-2">
                <p>hello!</p>
            </div>
            <div className="flex flex-row ml-20 mr-4 row-start-4 col-start-2 col-end-3">
                <p>hello!</p>
            </div>
        </div>
    )
}