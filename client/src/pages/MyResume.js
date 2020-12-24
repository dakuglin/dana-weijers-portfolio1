import React from "react";
import resumejpg from "../images/resume.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../components/Background/Background";

function MyResume() {
    return (
        <>
        <Background 
            backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg" 
        >
        <Container fluid className="background">
            <Row>
                <Col>
                    <img className="resume img-fulid"src={resumejpg} alt="Dana Weijers Resume"/>
                </Col>
            </Row>
        </Container>
        </Background>
        </>
    );
};

export default MyResume;