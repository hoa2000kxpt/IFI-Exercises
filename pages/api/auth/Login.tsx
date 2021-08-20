import React from "react";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    email: string,
    password: string,
};

const adminAccount = {
    email: "hoa2000kxpt@gmail.com",
    password: "123456"
}

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => fetch('http://localhost:3000', { method: 'POST', redirect: 'follow' })
        .then(res => {
            if (adminAccount.email === data.email && adminAccount.password === data.password) {
                localStorage.setItem('current-user', JSON.stringify(data))
                window.location.href = "http://localhost:3000/admin";
            } else {
                alert("Email or password is not correct!")
            }
            

        })
    // fetch(''{})

    // console.log(watch("email")) // watch input value by passing the name of it
    // console.log(watch("password"))



    return (
        <>
            <style type="text/css">
                {`
        .login-page {
            position: relative;
            top: 150px;
            left: 400px;
            /* border: 1px solid black; */
        }

        .login-page input {
            width: 30%;
        }
        
        .login-page i {
            position: absolute;
            background-color: brown;
        }
        
        .alert-danger {
            width: 30%;
        }
        
        .btn-primary {
            width: 30%;
        }
        
        }
        `}
            </style>

            <div className="login-page">
                <Container fluid="md">
                    <Row>
                        <Col md={12}>
                            <Form onSubmit={handleSubmit(onSubmit)} >
                                {/* <Form action="/api/LoginAuth"> */}
                                <h3>Login Page</h3>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control {...register('email', { required: true, pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" })} type="email" placeholder="Enter email" name="email" id="email" />
                                    {errors?.email &&
                                        // if errors then display alert
                                        <Alert variant="danger">
                                            {errors.email?.type === "required" && <p>Email is required!</p>}
                                            {errors.email?.type === "pattern" && <p>Email is invalid!</p>}
                                        </Alert>
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control {...register('password', { required: true, minLength: 6 })} type="password" placeholder="Password" name="password" id="password" />
                                    {errors?.password &&
                                        // if errors then display alert
                                        <Alert variant="danger">
                                            {errors.password?.type === "required" && <p>Password is required!</p>}
                                            {errors.password?.type === "minLength" && <p>Password must be at least 6 characters long!</p>}
                                        </Alert>
                                    }
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
}



export default Login;