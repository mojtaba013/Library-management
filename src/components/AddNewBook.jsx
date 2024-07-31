import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useState } from "react";

function AddNewBook({onOpen}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) return null;
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-6 cursor-pointer">
        <p className="text-lg text-slate-800 font-bold ">مشخصات کتاب جدید</p>
        <XMarkIcon onClick={() => onOpen(false)} className="size-6 text-blue-500" />
      </div>

      <form className="grid gap-6" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-2 rounded-lg text-lg border-none outline-none"
          placeholder="عنوان"
        />
        <input
          value=""
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          className="w-full p-2 rounded-lg text-lg border-none outline-none"
          placeholder="نویسنده"
        />
        <input
          value=""
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          className="w-full p-2 rounded-lg text-lg border-none outline-none"
          placeholder="سال انتشار"
        />
        <input
          value=""
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          className="w-full p-2 rounded-lg text-lg border-none outline-none"
          placeholder="تعداد صفحات"
        />
        <div className="flex  justify-between items-center gap-x-4">
          <button
            type="submit"
            className="rounded-lg p-2 w-full text-white bg-blue-500 text-lg"
          >
            ذخیره
          </button>
          <button onClick={() => onOpen(false)} className="rounded-lg p-2 w-full text-white bg-red-500 text-lg">
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBook;
