import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const fogotSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            console.log({email})

        } catch (err) {

            console.log(err)
        }
    }

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>

                    <h1>ForgotPassword???</h1>

                    <Form className={"mt-4"} onSubmit={fogotSubmitHendle}>

                        <Form.Text className="text-muted mt-3">
                            비밀번호 변경 링크를 받으실 이메일 주소를 적으세요.
                        </Form.Text>

                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;