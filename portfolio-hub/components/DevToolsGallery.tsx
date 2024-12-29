import Image from "next/image"
import profileTestData from "@/placeholder/profileTestData"

interface DevToolsProps{
    data: string[]
}

export default function DevToolsGallery({data}: DevToolsProps){
    return(
        <div className="flex flex-row space-x-10">
            {data.map((value, idx) => (
                <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${value}/${value}-original.svg`}
                        alt={value}
                        key={idx}
                        height={60}
                        width={60}/>
            ))}
        </div>
    )
}