'use client';
import React from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

interface ComponentCarouselProp{
    children: React.ReactNode
    width: number,
    height: number
}

export default function ComponentCarousel({children, width, height}: ComponentCarouselProp){
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if(current === 0){
            setCurrent(React.Children.count(children)-1);
        }else{
            setCurrent(current-1);
        }
    };

    const nextSlide = () => {
        if(current === React.Children.count(children)-1){
            setCurrent(0);
        }else{
            setCurrent(current+1);
        }
    };

    return(
        <div className="flex flex-row items-center" style={{
            width: `${width+100}px`,
            height: `${height+100}px`
            }}>
            <i onClick={previousSlide}>
                <ArrowLeftCircleIcon className='text-amber h-10 w-10'/>
            </i>
            <div className="relative flex mx-auto mt-3 overflow-hidden" style={{
            width: `${width}px`,
            height: `${height}px`
            }}>
                <div className="flex flex-row transition ease-out duration-500 my-auto"
                    style={{
                        transform: `translateX(-${current * width}px)`
                        }}>
                    {React.Children.map(children, (child, idx) => (
                        <div key={idx} style={{width: width, height: height}}>
                            {child}
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 flex justify-center w-full gap-2">
                        {React.Children.map(children, (child, idx) => (
                            <div className={`rounded-full h-3.5 w-3.5 ${idx === current ? 
                                "bg-white" : "bg-gray-400"}`} 
                                onClick={() => {
                                    setCurrent(idx)
                                }}
                                >
                            </div>
                        ))}
                </div>
            </div>
            <i onClick={nextSlide}>
                <ArrowRightCircleIcon className='text-amber h-10 w-10'/>
            </i>
        </div>
        
    )
}