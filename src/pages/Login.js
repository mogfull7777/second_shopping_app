import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChack, setIsChack] = useState(false);

    const loginSubmitHendle = async (e) => {

        e.preventDefault()

        try {

            if (password === "") {
                alert("please write password")
            }

            const userInput = {
                email : email,
                password : password,
                isChack : isChack
            }

            // console.log(userInput)

            const {data, status} = await axios.post("http://localhost:9090/api/users/login", userInput)

            // . 하나를 호출
            // , 그리고

            if (status === 200) {
                alert("login success")

                localStorage.setItem("token", data.token)

                navigate("/profile")
            }

            console.log("**********", data)



        } catch (err) {
            console.log(err)
        }


    }

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>

                    <h1>LOGIN</h1>

                    <Form className={"mt-4"} onSubmit={loginSubmitHendle}>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group className="mb-4 mt-3" controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Do you want to remember your ID?
                            </Form.Text>
                            <Form.Check
                                className={"mt-3 mb-3"}
                                type="checkbox"
                                label="Remember"
                                value={isChack}
                                onChange={e => setIsChack(e.target.checked)}
                            />
                        </Form.Group>


                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                        <Row>
                            <Col className={"mt-3"}>
                                <Link to={"/find/email"}>
                                    Find ID
                                </Link>
                                <Link className={"ml-3"} to={"/forgot/password"}>
                                    Find Password
                                </Link>
                            </Col>
                        </Row>


                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;