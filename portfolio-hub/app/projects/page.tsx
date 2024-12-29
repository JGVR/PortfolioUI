'use client';

import ComponentCarousel from "@/components/ComponentCarousel";
import profileTestData from "@/placeholder/profileTestData";
import DevToolsGallery from "@/components/DevToolsGallery";

export default function Projects(){
    return(
        <ComponentCarousel>
            <DevToolsGallery data={profileTestData.skills ?? []} iconSize={80}/>
        </ComponentCarousel>
    )
}
