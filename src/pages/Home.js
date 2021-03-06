import React, { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../App.css";
import jcover2 from "../assets/jcover2.png";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import { axios } from "../component/helpers";

import { HeaderHome, DatePanelBlack } from "../component";

export default function Home() {
    return (
        <Fragment>
            <HeaderHome
                jumbotronTitle="Belserion Hotel"
                jumbotronSubtitle="Luxury Resort &amp; Spa"
            >
                <DatePanelBlack />
            </HeaderHome>

            <div className="text-center wrap" style={{ marginTop: "238px" }}>
                <Row style={{ width: "100%", margin: "auto" }}>
                    <Col xl={8} lg={12} xs={12}>
                        <Row>
                            <Col xs={12} lg={6} xl={6} className="image1">
                                <img
                                    src={img1}
                                    alt="wkwkw"
                                    className="img12"
                                    id="item1"
                                />
                            </Col>

                            <Col
                                xs={12}
                                lg={6}
                                xl={6}
                                id="item2"
                            
                                style={{
                                    backgroundColor: "black",
                                    color: " #e2c285",
                                    width: "100%",
                                    border: "1px solid #e2c285"
                                }}
                            >
                                <p
                                    style={{
                                        marginTop: "50px",
                                        fontFamily: "Playfair Display",
                                        fontSize: "35px"
                                    }}
                                >
                                    Great Services
                                </p>
                                <img src={jcover2} alt="wkwk" />
                                <p style={{ marginTop: "30px" }}>
                                    <span
                                        style={{
                                            color: "#blaca3",
                                            position: "relative",
                                            display: "inline-block",
                                            width: "70%",
                                            marginBottom:'80px'

                                        }}
                                    >
                                        We will provide the best service during
                                        your stay at our hotel <br/>
                                        We are your connection point. With a variety of venues and flexible meetings spaces in a multitude of destinations, we’ll help you make the most of your time together.
                                    </span>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={12} xs={12} className="image2">
                        <img src={img3} alt="wkwkw" className="img12" />
                    </Col>
                </Row>
                <Row
                    className="bawah"
                    style={{ width: "100%", margin: "0 auto" }}
                >
                    <Col
                        xs={12}
                        lg={12}
                        xl={12}
                        style={{
                            backgroundColor: "black",
                            color: " #e2c285",
                            width: "100%",
                            border: "1px solid #e2c285", margin: "0 auto"
                        }}
                    >
                        <p
                            style={{
                                marginTop: "50px",
                                fontFamily: "Playfair Display",
                                fontSize: "35px"
                            }}
                        >
                            Best Experience
                        </p>
                        <img src={jcover2} alt="wkwk" />
                        <p style={{ marginTop: "30px" }}>
                            <span
                                style={{
                                    color: "#blaca3",
                                    position: "relative",
                                    display: "inline-block",
                                    width: "70%",
                                    marginBottom:'80px'

                                }}
                            >
                                We are your connection point. With a variety of
                                venues and flexible meetings spaces in a
                                multitude of destinations, we’ll help you make
                                the most of your time together.{" "}
                            </span>
                        </p>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
}
