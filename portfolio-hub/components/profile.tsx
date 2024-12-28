import Link from "next/link";
import Image from "next/image";
import profileTestData from "@/placeholder/profileTestData";
import { MapPinIcon, CalendarDaysIcon, ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";


export default function Profile(){
    return(
        <div className="grid grid-cols-2 grid-rows-[auto, auto, auto, auto] w-full p-4 gap-x-10 gap-y-20">
            {/*Quick into section*/}
            <div className="flex flex-col mt-5 ml-4 justify-center items-center">
                <h3 className="text-lg font-serif italic text-gray-300">Software Developer</h3>
                <h1 className="text-4xl text-white font-sans font-bold italic">Juan Vasquez</h1>
                <div className="flex flex-row mt-4">
                    <div className="w-10 bg-amber h-1 mt-7 ml-4"></div>
                    <p className="w-full text-gray-300 text-lg font-serif m-4">{profileTestData.shortBio}</p>
                </div>
            </div>

            {/*Picture, CV and Contact platform sections*/}
            <div className="flex flex-row mr-4 justify-center items-center">
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

            <div className="flex flex-row justify-start items-center col-start-1 col-end-3 -ml-4 -mr-4 bg-gradient-to-r from-lapis-lazuli to-platinum text-white p-4 rounded-lg shadow-lg space-x-20">
                <div className="flex flex-row items-center">
                    <h2 className="text-4xl font-bold font-sans mr-2">2+</h2>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold font-serif">Years of</h2>
                        <h2 className="text-2xl font-bold font-serif">Experience</h2>
                    </div>
                </div>

                {/* Contact Details Block */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold font-sans">Contact</h3>
                    <p className="mt-2">
                        Email:{" "}
                        <a
                        href="mailto:your-email@example.com"
                        className="underline hover:text-blue-200"
                        >
                        your-email@example.com
                        </a>
                    </p>
                    <p>Country: Your Country</p>
                </div>

                {/* Personal Details Block */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold font-sans">Details</h3>
                    <p className="mt-2">Date of Birth: January 1, 1990</p>
                    <p>Languages: English, Spanish</p>
                </div>
            </div>

            {/*About me Section*/}
            <div className="flex flex-row items-center justify-center ml-4">
                <Image className="border rounded-xl" src="https://stbc.blob.core.windows.net/portfolio-hub/ComputerImg-Portfolio.webp"
                        alt="Computer In Office"
                        width={530}
                        height={200}/>
            </div>
            <div className="flex flex-col pl-4 justify-center items-start mr-4">
                <div className="flex flex-row mr-3 mb-2">
                    <span className="w-10 bg-amber h-1 mt-4"></span>
                    <h1 className="text-2xl font-sans text-white font-bold ml-4">About</h1>
                </div>
                <p className="text-gray-300 font-serif text-lg pl-4">{profileTestData.bio}</p>
            </div>

            {/*SKILLS Sections*/}
            <div className="flex flex-row justify-center items-center col-start-1 col-end-3 ml-4 mr-4">
                {profileTestData.skills?.map((value, idx) => (
                    <div key={idx} className="flex flex-col h-56 w-56 rounded-xl mr-3 justify-center items-center bg-gradient-to-l to-black from-oxford-blue">
                        <Image src="https://stbc.blob.core.windows.net/portfolio-hub/react-logo.svg"
                                alt="react logo"
                                height={100}
                                width={100}/>
                        <h3 className="text-lg text-white font-serif font-bold italic mt-2">{value}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}