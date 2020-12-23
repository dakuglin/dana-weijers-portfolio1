  
import React from "react";
import Form from "../components/Form/Form";
import { Container, Row, Col } from "react-bootstrap";
import danajpg from "../images/dana.jpg";
import "./index.css";

function Contact() {
    return (
        <>
        <div className="contact-container">
        <Container fluid>
            <Row>
            <Col sm={1}></Col>
            <Col md={5}> 
                <Form /> 
            </Col>
            <Col sm={1}></Col>
            <Col md={4}> 
                <div >
                    <img className="contact-img img-fluid" src={danajpg} alt="Dana Weijers" />
                </div>
            </Col>
            <Col sm={1}></Col>
            </Row>
        </Container>
        </div>

        </>
    );
};

export default Contact;