import ISearch from "@/contracts/search-interface";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

export default function SearchBar({filters, text}: ISearch){
    return(
        <div>
            <div className="flex flex-row items-center">
                <div className="flex flex-row justify-center items-center bg-amber h-10 w-12 rounded-tl-xl rounded-bl-xl hover:opacity-80 cursor-pointer">
                    <FaFilter className="h-4 w-4 text-prussian-blue"/>
                </div>
                <input className="h-10 w-64 p-2 text-prussian-blue" type="text" placeholder="Search..." value={text}/>
                <div className="flex flex-row justify-center items-center bg-amber h-10 w-12 rounded-tr-xl rounded-br-xl cursor-pointer hover:opacity-80">
                    <IoSearchOutline className="h-8 w-8 text-prussian-blue"/>
                </div>
            </div>
        </div>
    );
}