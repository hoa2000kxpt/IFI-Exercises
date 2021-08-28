import ProductHeaderSidebar from "./components/ProductHeaderSidebar";
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Form, Row, Col, Alert } from "react-bootstrap";
import { useRouter } from 'next/router';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
}));

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Transaction History",
                color: "#000",
                font: {
                    size: 18,
                    weight: 'bold',
                    lineHeight: 1.2
                }
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: "Transaction Quantity",
                color: "#000",
                font: {
                    size: 18,
                    weight: 'bold',
                    lineHeight: 1.2
                }
            }
        }
    }
};



const ProductDetails = ({ product }) => {
    const classes = useStyles();

    const [chartData, setChartData] = useState({});
    const [transactionDate, setTransactionDate] = useState([]);
    const [transactionQuantity, setTransactionQuantity] = useState([]);
    const [transactionStatus, setTransactionStatus] = useState([]);


    const chart = () => {
        let transDate = [];
        // let transQuantity = [];
        // let transStatus = [];
        let transQuantitySell = [];
        let transQuantityBuy = [];
        let transQuantityCurrent = [];
        let currentValue = 0;


        axios.get(`http://localhost:3000/api/transactions/${product._id}`)
            .then(res => {
                for (const dataObj of res.data.data) {
                    transDate.push(dataObj.transactionDate);
                    // transQuantity.push(parseInt(dataObj.transactionQuantity));
                    // transStatus.push(dataObj.transactionStatus);
                    if (dataObj.transactionStatus === "buy") {
                        transQuantityBuy.push(dataObj.transactionQuantity);
                        transQuantitySell.push(null);
                        currentValue += dataObj.transactionQuantity;
                        transQuantityCurrent.push(currentValue);
                    } else {
                        transQuantitySell.push(dataObj.transactionQuantity)
                        transQuantityBuy.push(null)
                        currentValue -= dataObj.transactionQuantity;
                        transQuantityCurrent.push(currentValue);
                    }
                    console.log(currentValue)
                    console.log(transQuantityCurrent)


                }

                setChartData({
                    labels: transDate,
                    datasets: [
                        {
                            label: 'Sell',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            fill: false,
                            tension: 0.1,
                            pointHoverBorderColor: '#fff',
                            data: transQuantitySell,
                            // data: this.sellNumsArr
                        },

                        {
                            label: 'Buy',
                            backgroundColor: '#0984e3',
                            borderColor: '#0984e3',
                            fill: false,
                            tension: 0.1,
                            pointHoverBorderColor: '#fff',
                            data: transQuantityBuy
                            // data: this.buyNumsArr
                        },

                        {
                            label: 'Current Quantity',
                            backgroundColor: '#f1c40f',
                            borderColor: '#f1c40f',
                            fill: false,
                            tension: 0.1,
                            pointHoverBorderColor: '#fff',
                            data: transQuantityCurrent
                            // data: this.buyNumsArr
                        },
                    ],
                })
            })
            .catch(err => { console.log(err) });

        // console.log(transDate);
        // // console.log(transQuantity);
        // console.log(transStatus);
        // console.log(transQuantitySell);
        // console.log(transQuantityBuy);




    }

    const [state, setState] = React.useState({

        right: false,
    });
    const router = useRouter()
    // console.log(`{product.image}`)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange', //used to check error in realtime
        shouldFocusError: true, // focus input field after submit if it is not following required rule of input field
    });

    const onSubmit = async (data) => {
        // console.log(product._id);
        data['productID'] = product._id;
        const response = await fetch('http://localhost:3000/api/transactions', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const transaction = await response.json();

        if (!response.ok) {
            // throw new Error(data.message || 'Something went wrong!');
            console.log(response);
        }

        console.log(transaction)

        router.reload()
        return transaction;
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <List>
                <Form onSubmit={handleSubmit(onSubmit)} style={{ padding: '10px' }}>

                    <Form.Group className="mb-3">
                        <Form.Label>Choose your transaction type</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("transactionStatus")}>
                            <option value="sell" selected>Sell</option>
                            <option value="buy" >Buy</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Transaction Quantity</Form.Label>
                        <Form.Control {...register('transactionQuantity', { required: true, min: 1 })} type="number" name="transactionQuantity" id="transactionQuantity" />
                        {errors?.transactionQuantity &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.transactionQuantity?.type === "required" && <p>Transaction Quantity is required!</p>}
                                {errors.transactionQuantity?.type === "min" && <p>Transaction Quantity must be positive</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Transaction Date</Form.Label>
                        <Form.Control {...register('transactionDate', { required: true })} type="date" name="transactionDate" id="transactionDate" />
                        {errors?.transactionDate &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.transactionDate?.type === "required" && <p>Transaction Date is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Button type="submit" style={{ background: '#3498db', color: '#fff' }}>Submit</Button>
                </Form>
            </List>
        </div>

    );

    useEffect(() => {
        chart();
    }, [])


    return (
        <>
            <ProductHeaderSidebar />
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <img src={product.image} width="500" height="500" />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} style={{ 'padding': '5em' }}>
                        <h1 style={{ 'margin-bottom': '2em' }}>{product.name}</h1>
                        <p>Number of keys: {product.keyNo}</p>
                        <p>Price: {product.price} VND</p>
                        <p>Description: {product.description}</p>

                        <div>
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <Button onClick={toggleDrawer(anchor, true)} style={{ background: '#2ecc71', color: '#fff' }}>Add Transaction</Button>
                                    <SwipeableDrawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                        onOpen={toggleDrawer(anchor, true)}
                                    >
                                        {list(anchor)}
                                    </SwipeableDrawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paper} >
                            <Line data={chartData} options={options} width="500" height="500" />
                        </Paper>
                    </Grid>
                </Grid>

            </div>

        </>

    );
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await res.json()
    console.log(data.data)
    if (!data) {
        console.log("Error")
        // return {
        //     notFound: true,
        // }
    }
    return {
        props: { product: data.data }, // will be passed to the page component as props
    }
}

export default ProductDetails;