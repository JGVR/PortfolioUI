'use client';
import React from 'react';


interface ComponentCarouselProp{
    children: React.ReactNode
}

export default function ComponentCarousel({children}: ComponentCarouselProp){
    return(
        <div className="flex flex-row w-[40%] overflow-x-scroll space-x-2">
            {React.Children.map(children, (child, idx) => (
                <div key={idx}>
                    {child}
                </div>
            ))}
        </div>
    )
}