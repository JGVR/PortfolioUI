'use client';

import ComponentCarousel from "@/components/ComponentCarousel";
import profileTestData from "@/placeholder/profileTestData";
import DevToolsIcon from "@/components/DevToolsIcon";

export default function Projects(){
    return(
        <div className="w-[30%] m-auto">
            <ComponentCarousel>
                {profileTestData.skills?.map((value, idx) => (
                    <DevToolsIcon name={value} iconSize={500} key={idx}/>
                ))}
            </ComponentCarousel>
        </div>     
    )
}
