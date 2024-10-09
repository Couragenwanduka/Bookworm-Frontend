/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from "./dashboards";
import { updateBookCategory } from './dashboards'
import { BiSolidCategory } from "react-icons/bi";


const EditModal = ({ isOpen, onRequestClose, category }) => {
    const [text, setText] = useState('')
    

    const handleUpdateBookCategory = async () => {
          try{
            await updateBookCategory(category, text)
          }catch(error){
            console.log(error)
          }
    }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Edit Category Modal"
      ariaHideApp={false}
    >
      <div className='bg-[#27373A] h-full rounded-md  justify-center'>
        <div className='text-secondaryColor text-lg font-inter flex items-center p-5 justify-between border-b  border-textColor '>
            <div className='flex'>
                <BiSolidCategory  className='mr-2 mt-1'/>
                Rename
              </div>
            <button className='' onClick={onRequestClose}>X</button>
         </div>
     
        <form className='flex flex-col mt-20  justify-center items-center'>
            <input
            type='text'
            placeholder='Enter new name'
            className='border-1 rounded-md p-2 w-96  bg-transparent border  border-white border-opacity-40 focus:outline-none text-white text-opacity-40'
            onChange={(e)=>{setText(e.target.value)}}
            />
            <button  className='bg-secondaryColor w-20 rounded-md p-1 mt-5 text-black font-inter text-xl' onClick={handleUpdateBookCategory}>Add</button>
        </form>
      </div>
    
    </Modal>
  );
}

export default EditModal;
