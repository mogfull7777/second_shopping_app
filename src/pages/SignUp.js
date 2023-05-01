import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const SignUp = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isChackBox, setIsChackBox] = useState(false);


    const signUpSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            if (password !== confirmPassword) {
                alert("password not match")
            } else if (isChackBox === false) {
                alert("please chack in the box.")
            }

            const userInput = {
                name : username,
                email : email,
                password : password,
                confirmPassword : confirmPassword,
                isChackBox : isChackBox
            }

            // const {data, status} = await axios.post("http://localhost:9090/api/users/", userInput)
            const result = await axios.post("http://localhost:9090/api/users/", userInput)

            if (result.status === 201) {
                alert("success signup")

                navigate("/login")
            }

            console.log("**************", result)

            // console.log("+++++++++++++++", status);
            // console.log("--------------", data)

        } catch (err) {
            console.log(err)
        }

    }


    return (

        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>

                    <h1>SIGN UP</h1>

                    <Form className={"mt-4"} onSubmit={signUpSubmitHendle}>


                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEamil(e.target.value)}
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


                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={e => setconfirmPassword(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Text className="text-muted mt-3">
                            가입 시, 통합 계정으로 현 판매처가 제공하는 서비스를 모두 이용하실 수 있습니다.
                        </Form.Text>
                        <Form.Text className="text-muted mt-3 mb-3">
                            통합 계정 및 서비스 이용약관 (JY Store), 개인정보처리방침에 동의합니다.
                        </Form.Text>

                        <Form.Group className="mb-4 mt-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Agreement"
                                value={isChackBox}
                                onChange={e => setIsChackBox(e.target.checked)}
                            />
                        </Form.Group>


                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                        <Row>
                            <Col className={"mt-4"}>
                                <Link to={"/login"}>
                                    Go to Login
                                </Link>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;