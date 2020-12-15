import React from "react";
import Resume from "../components/Resume/Resume";
import { Container, Row, Col } from "react-bootstrap";

function MyResume() {
    return (
        <>
        <Container fluid className="background">
            <Row>
                <Col>
                    <Resume />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default MyResume;