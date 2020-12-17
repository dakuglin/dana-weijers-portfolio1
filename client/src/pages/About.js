import React from "react";
import Hero from "../components/Hero/Hero";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css"

function About() {
    return(
        <>
        <Hero backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg">
        </Hero>
        
        
        <Container>
            <Row>
                <Col>

                    <p className="main-text name">
                        Please allow me introduce myself, my name is <span className="main-text">Dana Ann Weijers.</span>
                    </p>
                    
                    <p className="main-text">
                        I am a full stack web developer with a background in chemical engineering. I recently graduated from Denver University with a certificate in full stack web development. I am confident my unique background and education will positively impact the web development industry. I absolutely love front end development because it allows me to express my creativity and animate my energetic personality! I hope you will take time to get to know me by exploring this site, and feel free to reach out with any questions or potential job opportunities. <span className="main-text">Thank you!</span>
                    </p>

                    <br></br>
                
                    <p className="main-text technologies">
                        JavaScript | Reactjs | HTML | CSS | Express | MongoDB | Nodejs | MySQL | Sequelize | Mongoose | JQuery | APIs
                    </p>
                 
                </Col>
            </Row>
        </Container>

        </>
    )
};

export default About;