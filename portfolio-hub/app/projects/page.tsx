'use client';
import ComponentCarousel from "@/components/ComponentCarousel";
import profileTestData from "@/placeholder/profileTestData";
import DevToolsIcon from "@/components/DevToolsIcon";


export default function Projects(){
    return(
        <div className="w-[30%] m-auto">
            <ComponentCarousel width={200} height={200}>
                {profileTestData.skills?.map((value, idx) => (
                    <DevToolsIcon name={value} iconSize={400} key={idx}/>
                ))}
            </ComponentCarousel>
        </div>
    )
}
