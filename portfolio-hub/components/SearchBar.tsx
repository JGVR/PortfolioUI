import ISearch from "@/contracts/search-interface";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import FilterDropDown from "./FilterDropDown";
import { useState } from "react";

export default function SearchBar({filters, text}: ISearch){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <div>
            <div className="flex flex-row items-center">
                {/*Filter Button*/}
                <div className="flex flex-row justify-center items-center bg-amber h-10 w-12 rounded-tl-xl rounded-bl-xl hover:opacity-80 cursor-pointer">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <FaFilter className="text-prussian-blue"/>
                    </button>
                </div>

                {/*Filter Dropdown*/}
                {isOpen ? <FilterDropDown isOpen={isOpen} setIsOpen={setIsOpen} categoryFilters={filters}/> : null}

                {/*Search Bar*/}
                <input className="h-10 w-96 p-2 text-prussian-blue" type="text" placeholder="Search..." value={text}/>

                {/*Search Button*/}
                <div className="flex flex-row justify-center items-center bg-amber h-10 w-12 rounded-tr-xl rounded-br-xl cursor-pointer hover:opacity-80">
                    <IoSearchOutline className="h-8 w-8 text-prussian-blue"/>
                </div>
            </div>
        </div>
    );
}