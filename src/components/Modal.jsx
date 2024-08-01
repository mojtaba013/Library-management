import React from "react";

function Modal({ children, onOpen, open }) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={() => onOpen(false)}
        className="inset-0 w-screen   h-full fixed bg-slate-800 opacity-60 "
      ></div>
      <div
        className={`absolute  w-[600px] h-[400px] transform ${
          open ? "sacle-100" : "scale-0"
        }     transition duration-300 top-5  left-1/4 p-4 z-10   bg-gray-100 rounded-lg  `}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
