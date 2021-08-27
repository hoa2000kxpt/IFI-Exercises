import ProductHeaderSidebar from "./components/ProductHeaderSidebar";
import React from 'react';
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



const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Sell',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            tension: 0.1,
            pointHoverBorderColor: '#fff',
            data: [0, 10, 5, 2, 20, 30, 45]
            // data: this.sellNumsArr
        },

        {
            label: 'Buy',
            backgroundColor: '#0984e3',
            borderColor: '#0984e3',
            fill: false,
            tension: 0.1,
            pointHoverBorderColor: '#fff',
            data: [3, 20, 1, 23, 24, 50, 100]
            // data: this.buyNumsArr
        }
    ],
};

const options = {
    responsive: true,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Transaction Date",
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
    const [state, setState] = React.useState({

        right: false,
    });
    // console.log(`{product.image}`)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange', //used to check error in realtime
        shouldFocusError: true, // focus input field after submit if it is not following required rule of input field
    });

    const onSubmit = data => console.log(data);

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
                        <Form.Select aria-label="Default select example" {...register("transactionType")}>
                            <option value="sell" selected>Sell</option>
                            <option value="buy" >Buy</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Transaction Quantity</Form.Label>
                        <Form.Control {...register('transactionQuantity', { required: true })} type="number" name="transactionQuantity" id="transactionQuantity" />
                        {errors?.transactionQuantity &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.transactionQuantity?.type === "required" && <p>Transaction Quantity is required!</p>}
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
                        <Paper className={classes.paper}>
                            <Line data={data} options={options} />
                        </Paper>
                    </Grid>
                </Grid>






            </div>

        </>


        // <>

        //     <Container>
        //         <Row>
        //             <Col md={6}>
        //                 <div className="productImage">
        //                     {/* <img src="{product.image}" /> */}
        //                     <h1>Image</h1>
        //                 </div>
        //             </Col>

        //             <Col md={6}>
        //                 <div className="productImage">
        //                     <h1>{product.name}</h1>
        //                     <p>Number of keys: {product.keyNo}</p>
        //                     <p>Price: {product.price} VND</p>
        //                     <p>Description: {product.description}</p>
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>

        // </>

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