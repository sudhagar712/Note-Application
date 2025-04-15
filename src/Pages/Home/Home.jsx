import React, { useState } from 'react'
import NotesCard from '../../Components/Notes/NotesCard'
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';

const Home = () => {

const [openEditModal , setOpenEditModal] = useState({
   isShown: false,
   type: "add",
   data:null,
})

const onClose = () => {
  setOpenEditModal({ isShown: false, type: "add", data: null });    
}





  return (
    <>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-8">
          <NotesCard
            title="Meeting with client"
            date="2023-10-01"
            content="Discuss project requirements"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openEditModal.isShown}
        onRequestClose={() =>
          setOpenEditModal({ isShown: false, type: "add", data: null })
        }
        ariaHideApp={false} // Disables the warning
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" }
        }}
        className="w-[90%] lg:w-[50%]   bg-white mx-auto mt-14 p-6 overflow-scroll"
      >
        <AddEditNotes
        type={openEditModal.type}
        noteData={openEditModal.data}
         onClose={onClose}  />
      </Modal>
    </>
  );
}

export default Home
