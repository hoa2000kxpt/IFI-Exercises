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
import dbConnect from "../../../utils/dbConnect";
// import { connectToDatabase } from '../../../lib/db';



async function createUser(id, email, password, username, fullname, phoneNumber, gender, dob, status, role) {
    const response = await fetch('/api/auth/creatUser', {
        method: 'POST',
        body: JSON.stringify({ id, email, password, username, fullname, phoneNumber, gender, dob, status, role }),
        headers: {
            'Content-Type': "application/json"
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
}

const AdminTable = () => {

    const [tableData, setTableData] = useState(

        //    [
        //     {
        //         "username": "Hoa Prox",
        //         "email": "hoa2000kxpt@gmail.com",
        //         "fullname": "Do Van Hoa",
        //         "phoneNumber": "11111",
        //         "gender": "1",
        //         "password": "123456",
        //         "role": "admin",
        //         "status": "activated",
        //         "dob": "2000-09-26",
        //         "id": 1
        //     },
        //     {
        //         "username": "Hoang Hieu",
        //         "email": "hieu4c18@gmail.com",
        //         "fullname": "Hoang Trung Hieu",
        //         "phoneNumber": "0111222333",
        //         "gender": "1",
        //         "password": "333333",
        //         "role": "user",
        //         "status": "deactivated",
        //         "dob": "Fri Aug 03 2021 09:30:00",
        //         "id": 3
        //     },
        //     {
        //         "username": "test",
        //         "email": "test@gmail.com",
        //         "fullname": "Test",
        //         "phoneNumber": "555555",
        //         "gender": "1",
        //         "password": "123456",
        //         "role": "user",
        //         "status": "activated",
        //         "dob": "2000-09-26",
        //         "id": 4
        //     },
        //     {
        //         "username": "Hoa PROC",
        //         "email": "4343@gmail.com",
        //         "fullname": "sfsfsfd",
        //         "phoneNumber": "555555",
        //         "gender": "1",
        //         "password": "123456789",
        //         "role": null,
        //         "status": "activated",
        //         "dob": "2000-09-26",
        //         "id": 5
        //     }
        //    ]
    )



    const columns = [
        {
            title: "ID", field: "id", type: "numeric",
            validate: rowData => rowData.id === undefined || rowData.id === "" ? "Required" : true,
            emptyValue: () => <em>null</em>
        },
        {
            title: "Username", field: "username",
            validate: rowData => rowData.username === undefined || rowData.username === "" ? "Required" : true,
            emptyValue: () => <em>null</em>
        },
        {
            title: "Gender", field: "gender", lookup: { 0: "Female", 1: "Male", 2: "Other" },
            validate: rowData => rowData.gender === undefined || rowData.gender === "" ? "Required" : true,
            emptyValue: () => <em>null</em>
        },
        {
            title: "Email", field: "email",
            validate:  (rowData) => {
                // const response = await fetch('http://localhost:3000/api/auth/email/' + rowData.email, {
                //     method: 'GET',
                //     headers: {
                //         'Content-Type': "application/json"
                //     }
                // })

                // const result = await response.json() // Error Message
                // // const isEmailDuplicate = 
                // console.log(result)

                // // return result;
                // if (rowData.email ) {

                // }

                if (rowData.email === undefined || rowData.email === "") {
                    return "Required";
                } else if (!rowData.email.includes('@' && '.')) {
                    return "Please enter valid email!";
                }
                return true;
            },
            emptyValue: () => <em>null</em>
        },
        {
            title: "Password", field: "password",
            validate: rowData => {
                if (rowData.password === undefined || rowData.password === "") {
                    return "Required";
                } else if (rowData.password.length < 6) {
                    return "Password must be at least 6 characters long!"
                }
                return true;
            },
            render: rowData => <p>{rowData.password.split('').map(() => '*')}</p>,
            emptyValue: () => <em>null</em>
        },
        {
            title: "Full name", field: "fullname",
            validate: rowData => rowData.fullname === undefined || rowData.fullname === "" ? "Required" : true,
            emptyValue: () => <em>null</em>
        },
        {
            title: "Phone Number", field: "phoneNumber",
            validate: rowData => {
                if (rowData.phoneNumber === undefined || rowData.phoneNumber === "") {
                    return "Required";
                } else if (rowData.phoneNumber.length < 10) {
                    return "Phone Number must be at least 10 characters long!"
                } else if (isNaN(rowData.phoneNumber)) {
                    return "It must be a number!"
                }
                return true;
            },
            emptyValue: () => <em>null</em>
        },
        {
            title: "Date of Birth", field: "dob", type: "date",
            render: (rowData) => <Moment format="DD/MM/YYYY">{rowData.dob}</Moment>,
            validate: rowData => rowData.dob === undefined || rowData.dob === "" ? "Required" : true
            , emptyValue: () => <em>null</em>
        },
        {
            title: "Role", field: "role", lookup: { admin: "Admin", user: "User" },
            validate: rowData => rowData.role === undefined || rowData.role === "" ? "Required" : true,
            emptyValue: () => <em>null</em>
        },
        {
            title: "Status", field: "status", lookup: { activated: "Activated", deactivated: "Deactivated" },
            render: (rowData) => <div style={{ 'font-weight': "bold", color: rowData.status == "activated" ? "green" : "red" }}> {rowData.status}</div>,
            validate: rowData => rowData.status === undefined || rowData.status === "" ? "Required" : true,
            emptyValue: () => <em>null</em>

        }
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
        fetch("http://localhost:3000/api/users")
            .then(res => res.json())
            .then(res => setTableData(res.data))
    }, [])

    return (
        <div>
            <MaterialTable title="User Management"
                data={tableData}
                columns={columns}
                icons={tableIcons}
                editable={{
                    onRowAdd: (newRow) => new Promise(async (resolve, reject) => {
                        try {
                            const result = await createUser(newRow.id, newRow.email, newRow.password, newRow.username, newRow.fullname, newRow.phoneNumber, newRow.gender, newRow.dob, newRow.status, newRow.role)
                            console.log(result);
                            // const users = await result.json();
                            setTableData([...tableData, newRow]);
                            setTimeout(() => resolve(), 500);
                        } catch (error) {
                            console.log(error);
                        }
                        // const response = await fetch('api/auth/createUser', {
                        //     method: 'POST',
                        //     body: JSON.stringify(newRow),
                        //     headers: {
                        //         'Content-Type': "application/json"
                        //     }
                        // });


                        // if (!response.ok) {
                        //     // throw new Error(data.message || 'Something went wrong!');
                        //     console.log(response);
                        // }

                        // console.log(newRow);


                    }),

                    onRowUpdate: (newRow, oldRow) => new Promise(async (resolve, reject) => {
                        const response = await fetch('api/users/' + oldRow._id, {
                            method: 'PUT',
                            body: JSON.stringify(newRow),
                            headers: {
                                'Content-Type': "application/json"
                            }
                        });

                        const users = await response.json();

                        if (!response.ok) {
                            // throw new Error(data.message || 'Something went wrong!');
                            console.log(response);
                        }
                        const updatedData = [...tableData];
                        updatedData[oldRow.tableData.id] = newRow;
                        setTableData(updatedData);
                        setTimeout(() => resolve(), 500);
                        return users;
                    }),

                    onRowDelete: (selectedRow) => new Promise(async (resolve, reject) => {
                        const response = await fetch('api/users/' + selectedRow._id, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': "application/json"
                            }
                        });

                        const users = await response.json();

                        if (!response.ok) {
                            // throw new Error(data.message || 'Something went wrong!');
                            console.log(response);
                        }
                        const updatedData = [...tableData];
                        updatedData.splice(selectedRow.tableData.id, 1);
                        setTableData(updatedData);
                        // console.log(selectedRow);
                        setTimeout(() => resolve(), 500);
                        return users;
                    })

                }}
                options={{
                    // filtering: true,
                    headerStyle: { 'font-weight': "bold" },
                    exportButton: true,
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    pageSizeOptions: [2, 5, 10, 25, 50],
                    paginationType: "stepped",
                    grouping: true,
                    columnsButton: true,
                    rowStyle: (data, index) => index % 2 == 0 ? { background: "#f5f5f5" } : { background: "fff" }

                }}
            />

        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch("http://localhost:3000/api/users");
    const json = await res.json();
    return {
        props: {
            users: json,
        },
    };
}



export default AdminTable;