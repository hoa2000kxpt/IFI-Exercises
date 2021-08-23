import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import * as MUButton from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles({
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
});

// const Inputs = {
//     email: string,
//     password: string,
// };


const ButtonArea = () => {
    {/* FORM CONFIGURATION */ }
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange', //used to check error in realtime
        shouldFocusError: true, // focus input field after submit if it is not following required rule of input field
    });


    const onSubmit = async (data) => {
        console.log(data);
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const users = await response.json();

        if (!response.ok) {
            // throw new Error(data.message || 'Something went wrong!');
            console.log(response);
        }

        return users;
        // console.log(result)
    }

    
    {/* USER REGISTRATION SIDENAV */ }
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <h3 className="form-heading">User Registration</h3>
            </List>
            <Divider />

            <div className="form-details">
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control {...register('username', { required: true })} type="text" placeholder="Your username" name="username" id="username" />
                        {errors?.username &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.username?.type === "required" && <p>Username is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control {...register('email', { required: true })} type="email" placeholder="Your email" name="email" id="email" />
                        {errors?.email &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.email?.type === "required" && <p>Email is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register('password', { required: true })} type="password" placeholder="Your password" name="password" id="password" />
                        {errors?.password &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.password?.type === "required" && <p>Password is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control {...register('fullname', { required: true })} type="text" placeholder="Your fullname" name="fullname" id="fullname" />
                        {errors?.fullname &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.fullname?.type === "required" && <p>Fullname is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control {...register('phoneNumber', { required: true })} type="text" placeholder="Your phone number" name="phoneNumber" id="phoneNumber" />
                        {errors?.phoneNumber &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.phoneNumber?.type === "required" && <p>Phone Number is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control {...register('dob', { required: true })} type="date" placeholder="Your phone number" name="dob" id="dob" />
                        {errors?.dob &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.dob?.type === "required" && <p>Date of Birth is required!</p>}
                            </Alert>
                        }
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <Controller
                                rules={{ required: true }}
                                control={control}
                                defaultValue="male"
                                name="gender"
                                render={({ name, onBlur, onChange, value }) => (
                                    <RadioGroup>
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio />}
                                            label="Other"
                                        />
                                    </RadioGroup>
                                )}

                            />
                        </FormControl>
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("gender")}>
                            <option disabled>Choose gender</option>
                            <option value="male" selected>Male</option>
                            <option value="female" >Female</option>
                            <option value="other" >Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("role")}>
                            <option disabled>Choose role</option>
                            <option value="admin" selected>Admin</option>
                            <option value="user">User</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("status")}>
                            <option disabled>Choose user status</option>
                            <option value="activated" selected>Activated</option>
                            <option value="deactivated" >Deactivated</option>
                        </Form.Select>
                    </Form.Group>


                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </div>

        </div>
    );

    return (
        <>
            <style type="text/css">
                {
                    `
                    .btn-area button {
                        display: flex;
                        margin-left: 90%;
                        margin-top: 1em;
                        padding: 10px;
                    }

                    .btn-area button svg {
                        margin-right: 5px;
                        margin-top: 4px;
                    }

                    .form-heading, .form-details {
                        padding: 10px;
                    }
                    
                    `
                }
            </style>

            <div className="btn-area">
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button variant="success" onClick={toggleDrawer(anchor, true)}><BsIcons.BsPlusSquare /> Add User</Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>


        </>
    )
}

export default ButtonArea
