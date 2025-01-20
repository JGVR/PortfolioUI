import Image from "next/image";

interface DevToolsProps{
    name: string,
    iconSize: number
}

export default function DevToolsIcon({name, iconSize}: DevToolsProps){
    return(
        <div className="flex">
            <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
                alt={name}
                height={iconSize}
                width={iconSize}/>
        </div>
    )
}