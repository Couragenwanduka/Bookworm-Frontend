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
      <div className='bg-div6Color h-full rounded-md'>
        <div className='text-customTextColor ml-5 text-lg font-inter pt-3 flex  border-none'>
            <BiSolidCategory  className='mr-2 mt-1'/>
            Rename
            <button className='ml-60' onClick={onRequestClose}>X</button>
         </div>
         <div className='border border-b border-textColor mt-2'></div>
        <form className='flex flex-col mt-5 '>
            <input
            type='text'
            placeholder='Enter new name'
            className='border-1 rounded-md p-2 w-72 ml-16 bg-transparent border  bg-customDivColor'
            onChange={(e)=>{setText(e.target.value)}}
            />
            <button  className='bg-customYellow w-20 rounded-md p-1 mt-5 ml-40 text-black font-inter text-xl' onClick={handleUpdateBookCategory}>Add</button>
        </form>
      </div>
    
    </Modal>
  );
}

export default EditModal;
