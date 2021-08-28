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
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useRouter } from 'next/router'





const ProductTable = () => {
    const [tableData, setTableData] = useState()
    const [preferDarkMode, setPreferDarkMode] = useState(() => {
        if (process.browser) {
            const mode = localStorage.getItem("tableDarkMode")
            return mode === "true" || false
        }

    });

    const columns = [
        {
            title: "ID", field: "id", type: "numeric",
            validate: (rowData) => {
                if (rowData.id === undefined || rowData.id === "") {
                    return "Required!"
                }
                else if (rowData.id <= 0) {
                    return "ID must not be negative!"
                } else if (isNaN(rowData.id)) {
                    return "Please enter a positive number!"
                }
                return true;
            }
        },
        {
            title: "Product Name", field: "name",
            validate: (rowData) => {
                if (rowData.name === undefined || rowData.name === "") {
                    return "Required!"
                }
                return true;
            }

        },
        {
            title: "Product Image", field: "image",
            validate: (rowData) => {
                if (rowData.image === undefined || rowData.image === "") {
                    return "Required!"
                }
                return true;
            },
            render: rowData => <img src={rowData.image} style={{ width: 200 }} />
        },
        {
            title: "Number of keys", field: "keyNo", type: "numeric",
            validate: (rowData) => {
                if (rowData.keyNo <= 0) {
                    return "ID must not be negative!"
                } else if (rowData.keyNo === undefined || rowData.keyNo === "") {
                    return "Required!"
                } else if (isNaN(rowData.keyNo)) {
                    return "Please enter a positive number!"
                }
                return true;
            }
        },
        {
            title: "Description", field: "description",
            validate: (rowData) => {
                if (rowData.description === undefined || rowData.description === "") {
                    return "Required!"
                }
                return true;
            },
        },
        {
            title: "Price", field: "price", 
            type: "currency", currencySetting:{ currencyCode:'VND', minimumFractionDigits:0, maximumFractionDigits:2},
            validate: (rowData) => {
                if (rowData.price <= 0) {
                    return "Price must not be negative!"
                } else if (rowData.price === undefined || rowData.price === "") {
                    return "Required!"
                } else if (isNaN(rowData.price)) {
                    return "Please enter a positive number!"
                }
                return true;
            }

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

    const theme = createTheme({
        palette: {
            type: preferDarkMode ? "dark" : "light"
        },
    });

    const darkModeChangeHandler = () => {
        setPreferDarkMode(!preferDarkMode);
        localStorage.setItem("tableDarkMode", !preferDarkMode)
    }

    const router = useRouter()
    const handleClick = (e, id) => {
        e.preventDefault()
        router.push(`/products/${id}`)
    }

    return (
        <div>
            <FormControlLabel
                value="top"
                control={<Switch color="primary" checked={preferDarkMode} />}
                onChange={darkModeChangeHandler}
                label="Dark Mode"
                labelPlacement="top"
            />
            <ThemeProvider theme={theme}>

                <MaterialTable
                    title="Product Management"
                    data={tableData}
                    columns={columns}
                    icons={tableIcons}
                    actions={[
                        {
                            icon: () => <VisibilityIcon />,
                            tooltip: 'View',
                            onClick: (event, rowData) => {
                                handleClick(event, rowData._id);
                                
                            }
                            




                        }
                    ]}

                    editable={{
                        onRowAdd: (newRow) => new Promise(async (resolve, reject) => {
                            const result = await fetch('http://localhost:3000/api/products', {
                                method: 'POST',
                                body: JSON.stringify(newRow),
                                headers: {
                                    'Content-Type': "application/json"
                                }
                            });
                            const products = await result.json();

                            setTableData([...tableData, newRow]);
                            setTimeout(() => resolve(), 500);
                            return products;
                        }),

                        onRowUpdate: (newRow, oldRow) => new Promise(async (resolve, reject) => {
                            const response = await fetch('api/products/' + oldRow._id, {
                                method: 'PUT',
                                body: JSON.stringify(newRow),
                                headers: {
                                    'Content-Type': "application/json"
                                }
                            });

                            const products = await response.json();

                            if (!response.ok) {
                                // throw new Error(data.message || 'Something went wrong!');
                                console.log(response);
                            }
                            const updatedData = [...tableData];
                            updatedData[oldRow.tableData.id] = newRow;
                            setTableData(updatedData);
                            setTimeout(() => resolve(), 500);
                            return products;
                        }),

                        onRowDelete: (selectedRow) => new Promise(async (resolve, reject) => {
                            const response = await fetch('api/products/' + selectedRow._id, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': "application/json"
                                }
                            });

                            const products = await response.json();

                            if (!response.ok) {
                                // throw new Error(data.message || 'Something went wrong!');
                                console.log(response);
                            }
                            const updatedData = [...tableData];
                            updatedData.splice(selectedRow.tableData.id, 1);
                            setTableData(updatedData);
                            // console.log(selectedRow);
                            setTimeout(() => resolve(), 500);
                            return products;
                        })

                    }}
                    options={{
                        search: true,
                        headerStyle: { 'font-weight': "bold", 'text-align': 'center', 'font-size': '8' },
                        cellStyle: { 'text-align': 'center', 'font-size': '8' },
                        exportButton: true,
                        addRowPosition: "first",
                        actionsColumnIndex: -1,
                        pageSizeOptions: [2, 5, 10, 25, 50],
                        paginationType: "stepped",
                        columnsButton: true,
                        // rowStyle: (data, index) => index % 2 == 0 ? { background: "#f5f5f5" } : { background: "fff" }
                    }}
                />
            </ThemeProvider>


        </div>
    );



}


export default ProductTable;