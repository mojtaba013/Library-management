import { XMarkIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  author: "",
  year: "",
  countPage: "",
};

function AddNewBook({ onOpen }) {
  const [formData, setFormData] = useState({ initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        formData
      );
      toast.success("مشخصات کتاب با موفقیت ثبت شد");
      setFormData({ ...initialState });
      // صرفا جهت نمایش و تست
      //console.log(response.status);
      // if (response.status === 200)
      //   toast.success("مشخصات کتاب با موفقیت ثبت شد");
    } catch (error) {
      toast.error("متاسفانه خطایی رخ داد.");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-6 cursor-pointer">
        <p className="text-lg text-slate-800 font-bold ">مشخصات کتاب جدید</p>
        <XMarkIcon
          onClick={() => onOpen(false)}
          className="size-6 text-blue-500"
        />
      </div>

      <form className="grid gap-6" onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          className="w-full p-2 rounded-lg text-lg  outline-none"
          placeholder="عنوان"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          type="text"
          className="w-full p-2 rounded-lg text-lg border-none outline-none"
          placeholder="نویسنده"
        />
        <input
          name="year"
          value={formData.year}
          onChange={handleChange}
          type="text"
          className="w-full p-2 rounded-lg text-lg border-none outline-none"
          placeholder="سال انتشار"
        />
        <input
          name="countPage"
          value={formData.countPage}
          onChange={handleChange}
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
          <button
            onClick={() => onOpen(false)}
            className="rounded-lg p-2 w-full text-white bg-red-500 text-lg"
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBook;
