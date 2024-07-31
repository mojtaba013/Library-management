import { AgGridReact } from "ag-grid-react";
import "./App.css";
import { createRoot } from "react-dom/client";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import AddNewBook from "./components/AddNewBook";

function App() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);

  const columnDefs = [
    { headerName: "ردیف", field: "id", editable: false },
    { headerName: "عنوان", field: "title", editable: true, filter: true },
    { headerName: "نویسنده", field: "author", editable: true, filter: true },
    {
      headerName: "عملیات",
      cellRenderer: (params) => (
        <button
          className="bg-red-200 rounded-lg px-6"
          onClick={() => deleteRow(params.data.id)}
        >
          حذف
        </button>
      ),
    },
  ];

  //const containerStyle = useMemo(() => ({ width: "100%", height: 500 }), []);
  const gridStyle = useMemo(() => ({ height: 500, width: "100%" }), []);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //console.log(data);
    setRowData(res.data);
  };

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);

  const onGridReady = useCallback((params) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const deleteRow = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        toast.success("عملیات حذف با موفقیت انجام شد");
      })
      .catch((error) => {
        toast.error("متاسفانه خطایی رخ داد");
      });
    setRowData(rowData.filter((row) => row.id !== id));
  };

  const updateData = async (params) => {
    const id = params.data.id;
    console.log(params, rowData);

    const updatedRows = rowData.map((row) => {
      if (row.id === params.data.id) {
        return { ...row, [params.colDef.field]: params.value };
      }
      return row;
    });
    setRowData(updatedRows);
    //toast.success("آپدیت انجام شد");

    console.log(updatedRows);

    await axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        // title: updatedRows.data.title,
        // body: updatedRows.data.body,
      })
      .then((response) => {
        toast.success("آپدیت انجام شد");
      });
  };

  return (
    <div>
      <div >
        <div className="border-b-2 border-gray-300 mb-4 pb-2">
          <p className="font-bold text-lg">کتابخانه</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <button className="bg-blue-400  py-2 px-4 mb-1 rounded-lg text-white">
              افزودن کتاب جدید
            </button>
          </div>

          <div className="example-wrapper">
            <div className="example-header">
              <span className="font-medium text-xl">جستجو:</span>
              <input
                className="rounded-lg outline-none p-2"
                type="text"
                id="filter-text-box"
                placeholder="جستجو..."
                onInput={onFilterTextBoxChanged}
              />
            </div>
          </div>
        </div>

        <div className={"ag-theme-quartz"} style={gridStyle}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            onCellValueChanged={updateData}
            rowSelection="multiple"
            enableRtl="true"
            onGridReady={onGridReady}
            //onSelectionChanged={onSelectionChanged}
          />
        </div>
      </div>
      <Modal open={true}>
        <AddNewBook />
      </Modal>
    </div>
  );
}

export default App;