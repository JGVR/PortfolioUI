import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(
        <nav className="grid grid-cols-1 h-screen bg-prussian-blue">
            <div className="flex flex-col items-center w-72 rounded-lg">
                <Image className="mt-5 border rounded-full"
                        src="https://stbc.blob.core.windows.net/portfolio-hub/JuanVasquez-Pic.jpeg"
                        alt="Juan Vasquez"
                        width={200}
                        height={200}/>
                <h1 className="text-2xl font-sans font-bold italic mt-2">Juan Vasquez</h1>
                <h3 className="font-serif text-sm">Software Developer</h3>
                <Link href="/profile" className="text-lg font-serif mt-10">Profile</Link>
                <Link href="/projects" className="text-lg font-serif mt-5">Experience</Link>
                <Link href="/experience" className="text-lg font-serif mt-5">Projects</Link>
            </div>
        </nav>
    )
}