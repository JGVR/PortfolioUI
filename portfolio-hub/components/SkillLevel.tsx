import DevToolsIcon from "./DevToolsIcon"


interface SkillStruct{
    name: string
    level: number
    iconSize: number
    meterLength: number
}


export default function SkillLevel({name, level, iconSize, meterLength}: SkillStruct){
    return(
        <div className="flex flex-row items-center border-b border-gray-400 py-4 px-8">
            <DevToolsIcon name={name} iconSize={iconSize}/>
            <h4 className="pl-4 w-28">{name}</h4>
            {Array.from({ length: meterLength }).map((_, levelIdx) => (
                <div className={`w-3 h-3 rounded-full mx-1 shrink-0 ${levelIdx <= level ? "bg-amber" : "bg-amber opacity-30"}`} key={`skill-${name}-${levelIdx}`}>
                </div>
            ))}
        </div>
    );
}