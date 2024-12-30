'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

interface ComponentCarouselProp{
    children: React.ReactNode
}

export default function ComponentCarousel({children}: ComponentCarouselProp){
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
        <div className="overflow-hidden relative">
            <div className="flex transition ease-in-out duration-500"
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}>
                {React.Children.map(children, (child, idx) => (
                    <div className="w-full flex-shrink-0"
                        key={idx}>
                        {child}
                    </div>
                ))}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex px-10">
                <button onClick={previousSlide}>
                    <ArrowLeftCircleIcon className='text-red-500 h-10 w-10'/>
                </button>
                <button onClick={nextSlide}>
                    <ArrowRightCircleIcon className='text-red-500 h-10 w-10'/>
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {React.Children.map(children, (child, idx) => (
                    <div onClick={() => {
                        setCurrent(idx)
                    }}
                        key={"circle" + idx}
                        className={`rounded-full h-5 w-5 ${current === idx ? "bg-white" : "bg-gray-500"}`}>
                    </div>
                ))}
            </div>
        </div>
    )
}