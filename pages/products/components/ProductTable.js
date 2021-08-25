import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Moment from 'react-moment';

const ProductTable = () => {
    const [tableData, setTableData] = useState(
    //     [
    //     {
    //         "name": "Bàn phím chơi game giả cơ E-DRA EK503",
    //         "keyNo": 104,
    //         "description": "phân khúc giá dưới 300 ngàn",
    //         "price": "269000",
    //         "image": "http://edravn.com/media/product/344_z2611444876451_c32d22d534df416029532d5c50d53abb.jpg",
    //         "id": 1
    //     },
    //     {
    //         "id": 2,
    //         "name": "Bàn phím chơi game cơ E-DRA EK389v2",
    //         "keyNo": 90,
    //         "price": "659000",
    //         "description": "phân khúc giá dưới 600 ngàn - 800 ngàn",
    //         "image": "http://edravn.com/media/product/342_1.jpg"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Bàn phím chơi game cơ E-DRA EK3104 Optical",
    //         "keyNo": 104,
    //         "price": "990000",
    //         "description": "phân khúc giá dưới 800 ngàn - 1 triệu",
    //         "image": "http://edravn.com/media/product/325_w4.jpg"
    //     },
    //     {
    //         "name": "Bàn phím chơi game cơ E-DRA EK387w RGB TKL",
    //         "keyNo": 87,
    //         "description": "phân khúc giá trên 1 triệu",
    //         "price": 1290000,
    //         "image": "http://edravn.com/media/product/324_w2.jpg",
    //         "id": 4
    //     }
    // ]
    )

    const columns = [
        {
            title: "ID", field: "id", type: "numberic"
        },
        {
            title: "Product Name", field: "name"
        },
        {
            title: "Product Image", field: "image",
            render: rowData => <img src={rowData.image} style={{ width: 200 }} />
        },
        {
            title: "Number of keys", field: "keyNo", type: "numberic"
        },
        {
            title: "Description", field: "description"
        },
        {
            title: "Price", field: "price"
        },

    ]

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(res => setTableData(res.data))
    }, [])

    return (
        <div>
            <MaterialTable title="Product Management"
                data={tableData}
                columns={columns}
                icons={tableIcons}
                // editable={{
                //     onRowAdd: (newRow) => new Promise(async (resolve, reject) => {
                //         try {
                //             const result = await createUser(newRow.id, newRow.email, newRow.password, newRow.username, newRow.fullname, newRow.phoneNumber, newRow.gender, newRow.dob, newRow.status, newRow.role)
                //             console.log(result);
                //             // const users = await result.json();
                //             setTableData([...tableData, newRow]);
                //             setTimeout(() => resolve(), 500);
                //         } catch (error) {
                //             console.log(error);
                //         }

                //     }),

                //     onRowUpdate: (newRow, oldRow) => new Promise(async (resolve, reject) => {
                //         const response = await fetch('api/users/' + oldRow._id, {
                //             method: 'PUT',
                //             body: JSON.stringify(newRow),
                //             headers: {
                //                 'Content-Type': "application/json"
                //             }
                //         });

                //         const users = await response.json();

                //         if (!response.ok) {
                //             // throw new Error(data.message || 'Something went wrong!');
                //             console.log(response);
                //         }
                //         const updatedData = [...tableData];
                //         updatedData[oldRow.tableData.id] = newRow;
                //         setTableData(updatedData);
                //         setTimeout(() => resolve(), 500);
                //         return users;
                //     }),

                //     onRowDelete: (selectedRow) => new Promise(async (resolve, reject) => {
                //         const response = await fetch('api/users/' + selectedRow._id, {
                //             method: 'DELETE',
                //             headers: {
                //                 'Content-Type': "application/json"
                //             }
                //         });

                //         const users = await response.json();

                //         if (!response.ok) {
                //             // throw new Error(data.message || 'Something went wrong!');
                //             console.log(response);
                //         }
                //         const updatedData = [...tableData];
                //         updatedData.splice(selectedRow.tableData.id, 1);
                //         setTableData(updatedData);
                //         // console.log(selectedRow);
                //         setTimeout(() => resolve(), 500);
                //         return users;
                //     })

                // }}
                options={{
                    // filtering: true,
                    headerStyle: { 'font-weight': "bold" },
                    exportButton: true,
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    pageSizeOptions: [2, 5, 10, 25, 50],
                    paginationType: "stepped",
                    columnsButton: true,
                    rowStyle: (data, index) => index % 2 == 0 ? { background: "#f5f5f5" } : { background: "fff" }
                }}
            />

        </div>
    );



}


export default ProductTable;