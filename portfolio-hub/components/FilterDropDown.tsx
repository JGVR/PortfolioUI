import IFilter from "@/contracts/filter-interface";
import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";

export default function FilterDropDown({ categoryFilters }: IFilter) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    //close the dropdown when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    //create an event listener to close the dropdown when clicking outside of it
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center w-full h-full hover:opacity-80 cursor-pointer">
                <FaFilter className="text-prussian-blue" />
            </button>
            {isOpen && (
                <div className="flex flex-col gap-2 bg-celestial-blue p-2 rounded-xl h-96 w-96 absolute top-8 z-10">
                    {categoryFilters.map((categoryFilter, index) => (
                        <div key={index} className="flex flex-col gap-2 pl-2 pt-2">
                            <label className="text-white text-lg font-bold italic">{categoryFilter.category.text}</label>
                            {categoryFilter.filters.map((filter, index) => (
                                <div key={index} className="flex items-center gap-2 pl-2">
                                    <input type="checkbox" id={`filter-${index}`} value={filter.text} />
                                    <label htmlFor={`filter-${index}`} className="text-white">{filter.text}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}