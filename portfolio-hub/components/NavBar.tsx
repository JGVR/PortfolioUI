import Link from "next/link"
import Image from "next/image"
import { UserIcon, BriefcaseIcon, FolderIcon } from "@heroicons/react/16/solid"

export default function NavBar(){
    return(
        <nav className="grid grid-rows-[auto,1fr] h-screen bg-prussian-blue">
            <div className="flex flex-col items-center w-72">
                <Image className="mt-5 border rounded-full"
                        src="https://stbc.blob.core.windows.net/portfolio-hub/JuanVasquez-Pic.jpeg"
                        alt="Juan Vasquez"
                        width={200}
                        height={200}/>
                <h1 className="text-2xl font-sans font-bold italic mt-2">Juan Vasquez</h1>
                <h3 className="font-serif text-sm">Software Developer</h3>
            </div>
            <div className="flex flex-col items-start w-72 pt-12 pl-5 pr-3">
                <div className="flex flex-row w-full h-10 items-center">
                    <UserIcon className="h-6 w-6 mr-3 text-white"/>
                    <Link href="/profile" className="text-lg font-serif">Profile</Link>
                </div>
                <div className="flex flex-row w-full h-10 items-center mt-2">
                    <BriefcaseIcon className="h-6 w-6 mr-3 text-white"/>
                    <Link href="/projects" className="text-lg font-serif">Experience</Link>
                </div>
                <div className="flex flex-row w-full h-10 items-center mt-2">
                    <FolderIcon className="h-6 w-6 mr-3 text-white"/>
                    <Link href="/experience" className="text-lg font-serif">Projects</Link>
                </div>
            </div>
        </nav>
    )
}