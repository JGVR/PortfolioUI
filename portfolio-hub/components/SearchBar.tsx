import ISearch from "@/contracts/search-interface";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import Filter from "@/models/filter";
import FilterDropDown from "./FilterDropDown";

export default function SearchBar({filters, text}: ISearch){
    return(
        <div>
            <div className="flex flex-row items-center">
                <div className="flex flex-row justify-center items-center bg-amber h-10 w-12 rounded-tl-xl rounded-bl-xl">
                    <FilterDropDown categoryFilters={filters}/>
                </div>
                <input className="h-10 w-96 p-2 text-prussian-blue" type="text" placeholder="Search..." value={text}/>
                <div className="flex flex-row justify-center items-center bg-amber h-10 w-12 rounded-tr-xl rounded-br-xl cursor-pointer hover:opacity-80">
                    <IoSearchOutline className="h-8 w-8 text-prussian-blue"/>
                </div>
            </div>
        </div>
    );
}