import Link from "next/link";
import profileTestData from "@/placeholder/profileTestData";
import { MapPinIcon, CalendarDaysIcon} from "@heroicons/react/16/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Profile(){
    return(
        <div className="grid grid-cols-[75%] w-full p-4">
            <div className="flex flex-col justify-center items-start bg-lapis-lazuli p-4 rounded-xl">
                {/*ABOUT ME Section*/}
                <h1 className="w-full text-white text-lg font-sans font-bold italic ml-1 mr-1 mb-2 border-b-2">About Me</h1>
                <div className="flex flex-row">
                    <p className="text-white font-serif mb-2 ml-1 mr-1 mt-2">{profileTestData.shortBio}</p>
                </div>
                <div className="flex flex-row">
                    <CalendarDaysIcon className="h-4 w-4 mr-1 mt-3"/>
                    <h2 className="text-white font-bold italic font-serif mb-1 mt-2">DOB:</h2>
                    {profileTestData.dateOfBirth ? <h2 className="text-white font-serif mb-1 ml-1 mr-3 mt-2">{profileTestData.dateOfBirth.toLocaleDateString()}</h2> : ""}
                </div>
                <div className="flex flex-row">
                    <MapPinIcon className="h-4 w-4 mt-1 mr-1"/>
                    <h2 className="text-white font-bold italic font-serif mb-1">Location:</h2>
                    {profileTestData.countryOfResidence ? <h2 className="text-white font-serif mb-1 ml-1 mr-3">{profileTestData.countryOfResidence}</h2> : ""}
                </div>
                <div className="flex flex-row">
                    <FaGithub className="h-4 w-4 mr-1 mt-1"/>
                    <h2 className="text-white font-bold italic font-serif mb-1">GitHub:</h2>
                    {
                        profileTestData.gitHubUrl ? 
                            <Link href={profileTestData.gitHubUrl ? profileTestData.gitHubUrl : ""} className="hover:opacity-75">
                                <h2 className="text-white font-serif mb-1 ml-1 mr-3">{profileTestData.linkedInUrl}</h2>
                            </Link> : ""
                    }
                </div>
                <div className="flex flex-row">
                    <FaLinkedin className="w-4 h-4 mr-1 mt-1"/>
                    <h2 className="text-white font-bold italic font-serif mb-1">LinkedIn:</h2>
                    {
                        profileTestData.linkedInUrl ? 
                            <Link href={profileTestData.gitHubUrl ? profileTestData.gitHubUrl : ""} className="hover:opacity-75">
                                <h2 className="text-amber font-serif mb-1 ml-1 mr-3 hover:underline">{profileTestData.linkedInUrl}</h2>
                            </Link> : ""
                    }
                </div>

                {/*SKILLS Section*/}
                <div>

                </div>
            </div>
        </div>
    )
}