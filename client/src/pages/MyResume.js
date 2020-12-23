import React from "react";
// import Resume from "../components/Resume/Resume";
import resumejpg from "../images/resume.jpg";
import { Container, Row, Col } from "react-bootstrap";

function MyResume() {
    return (
        <>
        <Container fluid className="background">
            <Row>
                <Col>
                    <img className="resume img-fulid"src={resumejpg} alt="Dana Weijers Resume"/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default MyResume;