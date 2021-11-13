import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import "../CSS/faq.css";

class Faq extends Component {

    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div>
                <Container fluid>
                    <h1 className="center"> Frequently Asked Questions </h1>
                    <h5 className="center">
                        We know you probably have a lot of questions.
                        <br/> We did too. (Still do.)
                        <br/> Here's a place to get some clarification!
                    </h5>

                </Container>
                <Container fluid>
                    <Accordion >
                        <Accordion.Item eventKey="0" className="colorBody">
                            <Accordion.Header>Why can't I see my user-name anywhere when I log in?</Accordion.Header>
                            <Accordion.Body >
                                Good question. Let's find out on the next episode.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="colorBody">
                            <Accordion.Header>How do I export my created portfolio?</Accordion.Header>
                            <Accordion.Body>
                                LOL
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="colorBody">
                            <Accordion.Header>What tech stack was this website made on?</Accordion.Header>
                            <Accordion.Body>
                                A MERN Stack! MongoDB, Express, React, and Node are the crux of this website, with like
                                a billion other dependencies.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="colorBody">
                            <Accordion.Header>Why is the default image Among Us?</Accordion.Header>
                            <Accordion.Body>
                                Sus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="colorBody">
                            <Accordion.Header>Why this color scheme?</Accordion.Header>
                            <Accordion.Body>
                                The colors of Wal-Mart have scientifically been proven to calm people down!
                                (As well as get people to purchase things they don't need...)
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="colorBody">
                            <Accordion.Header>Why can I only have 5 pages?</Accordion.Header>
                            <Accordion.Body>
                                We can't do more than 5, it's illegal.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        )
    }
}

export default Faq