import React from "react";

function Modal({ children, onOpen, open }) {
  if (!open) return null;
  console.log("yes");
  return (
    <div className="">
      <div
        onClick={() => onOpen(false)}
        className="inset-0 w-screen   h-full fixed bg-slate-800 opacity-60 "
      ></div>
      <div
        className="absolute transform   scale-100   transition duration-300 top-5  left-1/4 p-4 z-10   bg-gray-100 rounded-lg shadow-2xl  w-[600px] h-[400px]  "
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
