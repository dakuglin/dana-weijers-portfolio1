import React from "react";
import Form from "../components/Form/Form";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

function Contact() {
    return (
        <>
        <div className="contact-container">
        <Container fluid>
            <Row>
            <Col sm={1}></Col>
            <Col sm={5}> 
                <div className="contact-img">
                    <img className="img-fluid" src="./images/dana.png" alt="Dana Weijers" />
                </div>
            </Col>
            <Col sm={5}> 
                <Form /> 
            </Col>
            <Col sm={1}></Col>
            </Row>
        </Container>
        </div>

        </>
    );
};

export default Contact;
