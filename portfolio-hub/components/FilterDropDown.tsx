import IFilterDropdown from "@/contracts/dropdown-interface";
import { useState, useEffect, useRef } from "react";

export default function FilterDropDown({isOpen, setIsOpen, categoryFilters, selectedFilters, setSelectedFilters }: IFilterDropdown) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    //close the dropdown when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(!isOpen);
        }
    };

    //handle checkbox change
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //add or remove the filter from the selected filters
        if(event.target.checked){
            setSelectedFilters([...selectedFilters, event.target.value]);
        } else {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== event.target.value));
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
            {isOpen && (
                <div className="flex flex-col gap-2 bg-celestial-blue p-2 pr-2 pl-2 pb-4 rounded-xl h-96 w-96 absolute top-8 z-10 overflow-hidden overflow-y-scroll">
                    {categoryFilters.map((categoryFilter, index) => (
                        <div key={index} className="flex flex-col gap-2 pl-2 pt-3">
                            <label className="text-white text-xl font-bold italic">{categoryFilter.category.text}</label>
                            {categoryFilter.filters.map((filter, index) => (
                                <div key={index} className="flex items-center gap-2 pl-2 border-b border-white">
                                    <input type="checkbox" id={`filter-${index}`} value={filter.text} onChange={handleCheckboxChange}/>
                                    <label htmlFor={`filter-${index}`} className="text-white text-lg">{filter.text}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}