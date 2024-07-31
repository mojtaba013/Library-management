import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react'

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function BooksList() {
    const [rowData, setRowData] = useState([
        { id: 1, title: 'کتاب اول', author: 'نویسنده اول' },
        { id: 2, title: 'کتاب دوم', author: 'نویسنده دوم' },
    ]);

    const [columnDefs] = useState([
        { headerName: "ID", field: "id", editable: false },
        { headerName: "عنوان", field: "title", editable: true },
        { headerName: "نویسنده", field: "author", editable: true },
        {
            headerName: "عملیات",
            cellRendererFramework: (params) => (
                <button onClick={() => deleteRow(params.data.id)}>حذف</button>
            ),
        },
    ]);

    const addRow = () => {
        const newRow = { id: rowData.length + 1, title: '', author: '' };
        setRowData([...rowData, newRow]);
    };

    const deleteRow = (id) => {
        setRowData(rowData.filter(row => row.id !== id));
    };

    const onCellValueChanged = (params) => {
        const updatedRows = rowData.map(row => {
            if (row.id === params.data.id) {
                return { ...row, [params.colDef.field]: params.value };
            }
            return row;
        });
        setRowData(updatedRows);
    };

    return (
        <div>
            <button onClick={addRow}>افزودن کتاب</button>
            <div className="ag-theme-alpine"  style={{ width: '100%', height: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    onCellValueChanged={onCellValueChanged}
                    editType="fullRow"
                />
            </div>
        </div>
    );
}

export default BooksList