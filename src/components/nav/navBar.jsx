import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import book from '../../Images/Icons/book-saved.svg';
import notification from '../../Images/Icons/notification.svg';
import person from '../../Images/Icons/person.svg';
import downArrow  from '../../Images/Icons/downArrow.svg'

const NavBar = () => {
    return (
        <main className="flex justify-end">
           <section className=" w-full h-38  bg-primaryColor flex justify-between items-center p-10" >
               <section className="flex w-full gap-5">
                    <section className="flex justify-center items-center w-32  h-10 gap-4 rounded-md border border-[#A0A2A3] font-inter text-white " >
                            <h1>Basic</h1>
                        <img src={downArrow} />
                    </section>
                    <section className="flex w-[65%]  h-10 border  border-[#283F43] font-inter rounded-md justify-between items-center text-white p-4 bg-[#27373A] ">
                            <CiSearch /> 
                            <input 
                                type="text"
                                placeholder="Search in basic form"
                                className="w-full h-10 bg-transparent focus:outline-none ml-2"
                            />
                            <IoMicOutline />
                    </section>
                </section>

                <section className="flex justify-between items-center gap-16 mr-8">
                        <span className="flex gap-2">
                            <img src={book} className="w-6 h-6" />
                            <img src={notification} className="w-6 h-6" />
                        </span>
                        <span>
                            <img src={person} className="w-10 h-10" />
                        </span>
                </section>
           </section>
        </main>
    )
}

export default NavBar;
