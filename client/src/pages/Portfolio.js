import React from "react";
import "./index.css"
import { Card, CardDeck, OverlayTrigger, Tooltip } from "react-bootstrap";
import { GrDeploy } from "react-icons/gr"
import { DiGithubBadge } from "react-icons/di";


function Portfolio() {

    return (
        <>
        <CardDeck className="card-deck">
            <Card className="project-card">
                <Card.Img variant="top" src="./images/shakeit.png" alt="Shake It Up" />
                <Card.Body>
                    <Card.Title> Shake It Up </Card.Title>
                    <Card.Text>
                        Has it ever taken you forever to decide what to do on a Friday night? The creators of Shake It Up have developed a fun and unique solution to this problem! Never argue about plans again! Allow Shake It Up to randomly generate an activity for you. 
                        <br></br>
                        <br></br>
                    </Card.Text>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>} >
                        <Card.Link href="https://github.com/dakuglin/MasonJar" target="_#" >
                            <DiGithubBadge className="github-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">Deploy</Tooltip>} >
                        <Card.Link href="https://shake-it-up.herokuapp.com/" target="_#">
                            <GrDeploy className="deploy-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer>
                    JavaScript | React | MongoDB | Nodejs | Express | MERN
                </Card.Footer>
            </Card>
            
            <Card className="project-card">
                <Card.Img variant="top" src="./images/dogdenver.png" alt="Dog Friendly Denver" />
                <Card.Body>
                    <Card.Title>Dog Friendly Denver</Card.Title>
                    <Card.Text>
                    Have you ever wondered what kind of animal you would be and why? Do adorable pictures of cats and dogs melt your heart? If you answered yes to these questions visit Dog Friendly Denver! The only fun and interactive site helping to link adoptable pets in the Denver area to their forever home!
                    </Card.Text>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>} >
                        <Card.Link href="https://github.com/dakuglin/DogFriendlyDenver" target="_#" >
                            <DiGithubBadge className="github-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">Deploy</Tooltip>} >
                        <Card.Link href="https://queek1313.github.io/DogFriendlyDenver/" target="_#" >
                            <GrDeploy className="deploy-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer>
                    JavaScript | APIs | HTML | CSS
                </Card.Footer>
            </Card>

            <Card className="project-card">
                <Card.Img variant="top" src="./images/hotel.png" alt="Hotel Motel" />
                <Card.Body>
                    <Card.Title>Hotel Motel</Card.Title>
                    <Card.Text>
                    Are you tired of using overcomplicated and expensive property management systems for your small hotel or motel? Hotel Motel aims to solve these problems with its simple, easy to use interface. Quickly view guest information and hotel occupancy on one screen.
                    <br></br>
                    <br></br>
                    </Card.Text>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>} >
                        <Card.Link href="https://github.com/dakuglin/hotel_motel" target="_#" >
                            <DiGithubBadge className="github-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">Deploy</Tooltip>} >
                        <Card.Link href="https://hotelmotel.herokuapp.com/" target="_#" >
                            <GrDeploy className="deploy-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer>
                    JavaScript | Express | MySQL | Sequelize | Handlebars
                </Card.Footer>
            </Card>
        </CardDeck>

        <CardDeck className="card-deck">
            <Card className="project-card">
                <Card.Img variant="top" src="./images/burger.png" alt="Eat-Da-Burger" />
                <Card.Body>
                    <Card.Title>Eat-Da-Burger</Card.Title>
                    <Card.Text>
                    Who doesn't love a good burger? This application takes in a perfectly crafted burger order and allows you to devour the burger you just created, yummy!
                    <br></br>
                    <br></br>
                    </Card.Text>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>} >
                        <Card.Link href="https://github.com/dakuglin/burger13" target="_#" >
                            <DiGithubBadge className="github-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">Deploy</Tooltip>} >
                    <Card.Link href="https://polar-everglades-95084.herokuapp.com/" target="_#" >
                        <GrDeploy className="deploy-btn"/>
                    </Card.Link>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer>
                    JavaScript | Express | MySQL | ORM
                </Card.Footer>
            </Card>

            <Card className="project-card">
                <Card.Img variant="top" src="./images/password.png" alt="Password Generator" />
                <Card.Body>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Text>
                    Don't sweat trying to come up with a password that contains enough valid numbers, letters, and special characters! Tell this app exactly what you need in a password and let it do the hard work for you.
                    </Card.Text>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>} >
                        <Card.Link href="https://github.com/dakuglin/password-generator-03" target="_#">
                            <DiGithubBadge className="github-btn"/>
                        </Card.Link>  
                    </OverlayTrigger>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">Deploy</Tooltip>} >
                        <Card.Link href="https://dakuglin.github.io/password-generator-03/" target="_#">
                            <GrDeploy className="deploy-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer>
                    JavaScript | HTML | CSS
                </Card.Footer>
            </Card>

            <Card className="project-card">
                <Card.Img variant="top" src="./images/quiz.png" alt="Code Quiz" />
                <Card.Body>
                    <Card.Title>Code Quiz</Card.Title>
                    <Card.Text>
                    Want to test your coding skills? Hop on over to this interactive code quiz to test your JavaScript knowledge, better study up! 
                    <br></br>
                    <br></br>
                    <br></br>
                    </Card.Text>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>} >
                        <Card.Link href="https://github.com/dakuglin/codequiz04" target="_#">
                            <DiGithubBadge className="github-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top"
                        overlay={<Tooltip id="tooltip-disabled">Deploy</Tooltip>} >
                        <Card.Link href="https://dakuglin.github.io/codequiz04/" target="_#">
                            <GrDeploy className="deploy-btn"/>
                        </Card.Link>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer>
                JavaScript | JQuery | HTML | CSS
                </Card.Footer>
            </Card>
        </CardDeck>
        </>
    );
   
};

export default Portfolio;