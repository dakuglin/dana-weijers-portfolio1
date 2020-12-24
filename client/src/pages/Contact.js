import React, { Component } from "react";
import Form from "../components/Form/Form";
import Background from "../components/Background/Background";
import { Container, Row, Col } from "react-bootstrap";
import danajpg from "../images/dana.jpg";
import "./index.css";


class Contact extends Component {
    render() { 
        return (
            <>
            <Background 
                backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg" 
            >
                <div className="contact-container">
                    <Container fluid>
                        <Row>
                            <Col sm={1}></Col>
                            <Col md={5}> 
                                <Form /> 
                            </Col>
                            <Col sm={1}></Col>
                            <Col md={4}>   
                                <img className="contact-img img-fluid" src={danajpg} alt="Dana Weijers" />
                            </Col>
                            <Col sm={1}></Col>
                        </Row>
                    </Container>
                </div>
            </Background>
            </>
        );
    }
};

export default Contact;