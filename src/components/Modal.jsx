import React from "react";

function Modal({ children, onOpen, open }) {
  if (!open) return null;
  return (
    <div >
      <div onClick={() => onOpen(false)}></div>
      <div className="absolute top-5 p-4 z-10  left-1/4   bg-gray-100 rounded-lg shadow-2xl  w-[600px] h-[400px]  ">
        {children}
      </div>
    </div>
  );
}

export default Modal;
