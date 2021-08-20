import React, {useState} from "react";
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




const AdminTable = () => {
    const [tableData, setTableData] = useState([
        {
            "username": "Hoa Prox",
            "email": "hoa2000kxpt@gmail.com",
            "fullname": "Do Van Hoa",
            "phoneNumber": "11111",
            "gender": "1",
            "password": "123456",
            "role": "admin",
            "status": "activated",
            "dob": "2000-09-26",
            "id": 1
        },
        {
            "username": "Hoang Hieu",
            "email": "hieu4c18@gmail.com",
            "fullname": "Hoang Trung Hieu",
            "phoneNumber": "0111222333",
            "gender": 1,
            "password": "333333",
            "role": "user",
            "status": "deactivated",
            "dob": "Fri Aug 03 2021 09:30:00",
            "id": 3
        },
        {
            "username": "test",
            "email": "test@gmail.com",
            "fullname": "Test",
            "phoneNumber": "555555",
            "gender": "1",
            "password": "123456",
            "role": "user",
            "status": "activated",
            "dob": "2000-09-26",
            "id": 4
        },
        {
            "username": "Hoa PROC",
            "email": "4343@gmail.com",
            "fullname": "sfsfsfd",
            "phoneNumber": "555555",
            "gender": "1",
            "password": "123456789",
            "role": null,
            "status": "activated",
            "dob": "2000-09-26",
            "id": 5
        }
    ])

    const columns = [
        {
            title: "ID", field: "id", type: "numeric"   
        },
        {
            title: "Username", field: "username"
        },
        {
            title: "Gender", field: "gender", lookup: { 0: "Female", 1: "Male", 2: "Other" }
        },
        {
            title: "Email", field: "email"
        },
        {
            title: "Fullname", field: "fullname"
        },
        {
            title: "Phone Number", field: "phoneNumber", type: "numeric"
        },
        {
            title: "Date of Birth", field: "dob", type: "date",
            render: (rowData) => <Moment format="DD/MM/YYYY">{rowData.dob}</Moment>
        },
        {
            title: "Role", field: "role", lookup: { admin: "Admin", user: "User" } ,emptyValue: () => <em>null</em>
        },
        {
            title: "Status", field: "status", lookup: { activated: "Activated", deactivated: "Deactivated" },
            render: (rowData) => <div style={{ 'font-weight': "bold", color: rowData.status == "activated" ? "green" : "red" }}> {rowData.status}</div>

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



    return (
        <div>
            <MaterialTable title="User Management"
                data={tableData}
                columns={columns}
                icons={tableIcons}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        console.log(newRow);
                        setTableData([...tableData, newRow]);
                        setTimeout(() => resolve(), 500);
                    }),

                    onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData];
                        updatedData[oldRow.tableData.id] = newRow;
                        setTableData(updatedData);
                        setTimeout(() => resolve(), 500);
                    }),

                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData];
                        updatedData.splice(selectedRow.tableData.id, 1);
                        setTableData(updatedData);
                        // console.log(selectedRow);
                        setTimeout(() => resolve(), 500);
                    })

                }}
                options={{
                    // filtering: true,
                    headerStyle: {'font-weight': "bold"},
                    exportButton: true,
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    pageSizeOptions: [2,5,10,25,50],
                    paginationType: "stepped",
                    grouping: true,
                    columnsButton: true,
                    rowStyle:(data, index) => index % 2 == 0 ? {background:"#f5f5f5"} : {background:"fff"}
                    
                }}
            />




            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Username</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table> */}
        </div>
    );
}

export default AdminTable