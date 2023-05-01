import React from 'react';
import {Button, Card, Carousel, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
// import one from "../img/one.jpg";
// import two from "../img/two.jpg";
// import three from "../img/three.jpg";

const Main = () => {


    const carouselItemList = [
            {
                "id" : "1",
                "title" : "d-block w-100",
                "desc" : "First slide",
                "img" : require('../img/one.jpg'),
                "label" : "Make a gift!"
            },
            {
                "id" : "2",
                "title" : "d-block w-100",
                "desc" : "Second slide",
                "img" : require('../img/two.jpg'),
                "label" : "Let's think of the Earth together!"
            },
            {
                "id" : "3",
                "title" : "d-block w-100",
                "desc" : "Third slide",
                "img" : require('../img/three.jpg'),
                "label" : "Your environment will improve!"
            }

        ];

    const itemList = [
        {
            "title" : "macbook #1",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #2",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #3",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #4",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #5",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #6",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #7",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        },
        {
            "title" : "macbook #8",
            "overview" : "MacBooks entered a new era. The company announced it was moving away from the Intel chips it had been using since 2006, and rolled out the first Macs with the Apple-designed M1. Cut to 2023 and the company now offers the choice between seven chips, the latest of which are the M2 Pro and the M2 Max—both powering the new MacBook Pro.",
            "img" : "https://i.namu.wiki/i/lj-0ZuCCKsqg4JGPN-U7eatAKCz51C99K1EVFulhdrOfFh88JUGaCXXNCMJWjyUuPo8iw2c1iXesKtLDmC4fyyjpnEjrz_zKRVnZ0CIw2WmaJEYC4K7IM0xVAMERRRQu2BDtISFGascdDtxZ0JafFw.webp"
        }
    ]


    return (

        <>
                    {/* benner */}

                    <Carousel>
                        {carouselItemList && carouselItemList.map(e => (
                            <Carousel.Item>
                                <img
                                    className = {e.title}
                                    src = {e.img}
                                    alt = {e.desc}
                                />
                                <Carousel.Caption>
                                    <p>{e.label}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/*  tabs  */}
                    <Container className={"mt-5"}>
                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <Tab eventKey="home" title="Total">

                                <Container className={"mt-5"}>
                                    <Row>
                                        {itemList && itemList.map(mac => (
                                            <Col className = {"mt-5"}>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img
                                                        variant="top"
                                                        src={mac.img} />
                                                    <Card.Body>
                                                        <Card.Title>{mac.title}</Card.Title>
                                                        <Card.Text>
                                                            {mac.overview}
                                                        </Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                            </Tab>


                            <Tab eventKey="profile" title="Electron">
                                Proflie
                            </Tab>
                            <Tab eventKey="longer-tab" title="Moblie">
                                Loooooger
                            </Tab>
                            <Tab eventKey="contact" title="Notebook" disabled>
                                how about this
                            </Tab>
                        </Tabs>
                    </Container>


                    {/* product */}

                </>
            );
        };

export default Main;