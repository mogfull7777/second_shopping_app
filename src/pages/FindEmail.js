import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const FindEmail = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const phoneNumberSubmit = async (e) => {
        e.preventDefault()

        try {

            console.log({phoneNumber})

        } catch (err) {
            console.log(err)
        }

    }

    return (

        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>

                    <h1>ForgotPassword???</h1>

                    <Form className={"mt-4"} onSubmit={phoneNumberSubmit}>

                        <Form.Text className="text-muted mt-3">
                            이메일을 문자로 받으실 본인 휴대전화번호를 적어주세요.
                        </Form.Text>

                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phonenumber"
                                placeholder="000-0000-0000"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
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

export default FindEmail;