import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";

const NavBar = () => {
    return(
        <div className="flex bg-teal-950 ml-40 mt-custom-for-nav ">
            <div className="flex ml-5 mt-10 border w-32 h-10 border-borderColor2 border-1 rounded-lg items-center mr-9">
                <span className="text-white font-inter ml-6"> Basic</span>
                <span className="text-borderColor2 ml-5 text-2xl  mt-custom-for-nav-unicode ">&#x2304;</span>
            </div>
            <div className="relative  mt-10 mb-8 bg-customDivColor rounded  w-6/12">
                <input 
                    type="text"
                    placeholder="Search in basic form"
                    className="h-10  pl-10  rounded-lg border border-transparent focus:outline-none focus:border-blue-500 bg-customDivColor"
                />
                <CiSearch className="absolute left-3 top-2 text-gray-400 text-2xl font-bold w-5" /> 
                <IoMicOutline className="absolute right-3 top-2 text-gray-400   text-xl" />
                </div>

            <div className="flex ml-40">
                <span className="flex mt-12 flex-1 ml-5">
                <img src="src\assets\book-saved.png" className="w-5 h-5 mr-7"/>
                <img src="src\assets\notification.png" className="w-5 h-5"/>
                </span>
                <span className="bg-white rounded-xl w-7 h-7 flex justify-center items-center mt-11 ml-5 relative">
                <img src="src/assets/profile.png" className="w-6 h-6" />
                </span>
            </div>
        </div>
    )
}

export default NavBar