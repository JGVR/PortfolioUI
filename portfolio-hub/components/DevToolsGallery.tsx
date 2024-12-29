import Image from "next/image";

interface DevToolsProps{
    data: string[],
    iconSize: number
}

export default function DevToolsGallery({data, iconSize}: DevToolsProps){
    return(
        <div className="flex flex-row space-x-10">
            {data.map((value, idx) => (
                <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${value}/${value}-original.svg`}
                        alt={value}
                        key={idx}
                        height={iconSize}
                        width={iconSize}/>
            ))}
        </div>
    )
}