import React from "react";

function Modal({ children, onOpen, open }) {
  if (!open) return null;
  return (
    <div>
      <div onClick={() => onOpen(false)}></div>
      <div className="absolute  bg-red-400  w-[600px] h-[400px] top-1/2 left-1/2 transition">
        {children}
      </div>
    </div>
  );
}

export default Modal;
