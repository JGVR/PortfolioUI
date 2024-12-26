"use client";

import Link from "next/link"
import { UserIcon, BriefcaseIcon, FolderIcon } from "@heroicons/react/16/solid"
import { usePathname } from "next/navigation";

export default function NavBar(){
    const pathName = usePathname();

    return(
        <nav className="flex flex-row w-screen h-20 justify-center items-center bg-gradient-to-b from-prussian-blue from-30% to-lapis-lazuli">
            <div className="flex grow flex-col justify-center items-start">
                <h3 className="w-2 ml-5 text-xl font-sans font-bold italic">Juan</h3>
                <h3 className="w-20 ml-10 text-xl font-sans font-bold italic">Vasquez</h3>
            </div>
            <div className="w-28 flex-none mr-6">
                <Link href="/" className="text-lg font-serif">
                    <div className={`flex flex-row w-28 h-10 justify-center items-center p-2 rounded-lg hover:bg-celestial-blue hover:text-prussian-blue ${pathName === "/" ? "bg-amber text-prussian-blue" : ""}`}>
                        <h3>Profile</h3>
                    </div>
                </Link>
            </div>
            <div className="w-28 flex-none mr-6">
                <Link href="/experience" className="text-lg font-serif">
                    <div className={`flex flex-row w-28 h-10 justify-center items-center p-2 rounded-lg hover:bg-celestial-blue hover:text-prussian-blue ${pathName === "/experience" ? "bg-amber text-prussian-blue" : ""}`}>
                        <h3>Experience</h3>
                    </div>
                </Link>
            </div>
            <div className="w-28 flex-none mr-6">
                <Link href="/projects" className="text-lg font-serif">
                    <div className={`flex flex-row w-28 h-10 justify-center items-center p-2 rounded-lg hover:bg-celestial-blue hover:text-prussian-blue ${pathName === "/projects" ? "bg-amber text-prussian-blue" : ""}`}>
                        <h3>Projects</h3>
                    </div>
                </Link>
            </div>
        </nav>
    )
}