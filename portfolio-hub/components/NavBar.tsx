"use client";

import Link from "next/link"
import Image from "next/image"
import { UserIcon, BriefcaseIcon, FolderIcon } from "@heroicons/react/16/solid"
import { usePathname } from "next/navigation";

export default function NavBar(){
    const pathName = usePathname();

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
            <div className="flex flex-col items-start w-72 pt-12 pl-5 pr-5">
                <Link href="/" className="text-lg font-serif w-full">
                    <div className={`flex flex-row w-full h-10 items-center p-2 rounded-lg hover:bg-lapis-lazuli ${pathName === "/" ? "bg-lapis-lazuli" : ""}`}>
                        <UserIcon className="h-6 w-6 mr-3 text-white"/>
                        <h3>Profile</h3>
                    </div>
                </Link>
                <Link href="/experience" className="text-lg font-serif w-full">
                    <div className={`flex flex-row w-full h-10 items-center mt-2 p-2 rounded-lg hover:bg-lapis-lazuli ${pathName === "/experience" ? "bg-lapis-lazuli" : ""}`}>
                        <BriefcaseIcon className="h-6 w-6 mr-3 text-white"/>
                        <h3>Experience</h3>
                    </div>
                </Link>
                <Link href="/projects" className="text-lg font-serif w-full">
                    <div className={`flex flex-row w-full h-10 items-center mt-2 p-2 rounded-lg hover:bg-lapis-lazuli ${pathName === "/projects" ? "bg-lapis-lazuli" : ""}`}>
                        <FolderIcon className="h-6 w-6 mr-3 text-white"/>
                        <h3>Projects</h3>
                    </div>
                </Link>
            </div>
        </nav>
    )
}