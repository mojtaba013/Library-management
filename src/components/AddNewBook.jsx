import React from "react";
import { useState } from "react";

function AddNewBook() {
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
      <p className="text-lg text-slate-800 font-bold mb-6">افزودن کتاب جدید</p>
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
        <button type="submit" className="rounded-lg p-2 text-white bg-blue-600 text-lg">
          ذخیره
        </button>
      </form>
    </div>
  );
}

export default AddNewBook;
