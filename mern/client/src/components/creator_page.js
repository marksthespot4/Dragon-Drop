import React, {Component} from "react";
import Settings from "./settings";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import stock from "../imgs/stock_photo.jpg";
import sarah from "../imgs/sarah.jpg";
import mark from "../imgs/mark.jpg";
import ancil from "../imgs/ancil.png";
import lucy from "../imgs/lucy.jfif";
import charlie from "../imgs/charlie.jpg";
import slide_1 from "../imgs/slide_1.jpg";
import slide_2 from "../imgs/slide_2.jpg";
import slide_3 from "../imgs/slide_3.jpg";
import slide_4 from "../imgs/slide_4.jpg";
import slide_5 from "../imgs/slide_5.jpg";
import "../CSS/creators.css";

class Creator_page extends Component {
    constructor(props) {
        super(props);
    }


    render()
    {
        return (
            <div>
            <Container fluid>
                <h1 className="center"> Meet the Team! </h1>
                <h5 className="center"> Our hardworking engineers are determined to help you!
                <br/>Hit them up on LinkedIn or check out their GitHubs!
                </h5>
            </Container>

                <Container  className="center">
                    <div className="bar"/>
                    <Row>
                        <Col>
                            <Container className="card">
                            <Card border="dark" >
                                <Card.Img className="border" variant="top" src={stock} />
                                <Card.Body>
                                    <Card.Title>Brandon Xu</Card.Title>
                                    <Card.Text>
                                        Brandon Xu is a CS/DS Student on the Software Engineering track.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/brandonxu9">GitHub</Card.Link>
                                    <Card.Link href="https://www.linkedin.com/in/brandon-xu-32ab13191/">LinkedIn</Card.Link>
                                </Card.Body>
                            </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={lucy} />
                                    <Card.Body>
                                        <Card.Title>Lucy Cheng</Card.Title>
                                        <Card.Text>
                                            Lucy is a CS Student on the Software Engineering track.
                                            <br/>She likes to play Tetris in her free time.
                                        </Card.Text>
                                        <Card.Link href="https://github.com/lucyc998">GitHub</Card.Link>
                                        <Card.Link href="https://www.linkedin.com/in/lucy-cheng-a93ab4192/">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={ancil} />
                                    <Card.Body>
                                        <Card.Title>Ancil Trent</Card.Title>
                                        <Card.Text>
                                            Ancil is a CS student currently on the Cybersecurity track.
                                            <br/>He has a pet snake named Jerry!
                                        </Card.Text>
                                        <Card.Link href="https://github.com/bdtrent">GitHub</Card.Link>
                                        <Card.Link href="https://www.linkedin.com/in/ancil-trent-438b361b8/">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={mark} />
                                    <Card.Body>
                                        <Card.Title>Mark Lim</Card.Title>
                                        <Card.Text>
                                            Mark is a CS/DS student on the Software Engineering track.
                                            <br/>He loves watching fighting games, but is really bad at them.
                                        </Card.Text>
                                        <Card.Link href="https://github.com/marksthespot4/">GitHub</Card.Link>
                                        <Card.Link href="https://www.linkedin.com/in/mark-lim-8a0384201/">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={charlie} />
                                    <Card.Body>
                                        <Card.Title>Charlie Hyun</Card.Title>
                                        <Card.Text>
                                            Charlie is a CS/DS student on the Software Engineering and Machine Intelligence track.
                                            <br/>He's never had good barbecue, and won't stop till he gets it.
                                        </Card.Text>
                                        <Card.Link href="https://github.com/charliehyun">GitHub</Card.Link>
                                        <Card.Link href="https://www.linkedin.com/in/charlie-hyun-21a7691b4/">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={sarah} />
                                    <Card.Body>
                                        <Card.Title>Sarah Mi</Card.Title>
                                        <Card.Text>
                                            Sarah is a CS/DS student on the Software Engineering and Machine Intelligence track.
                                            <br/>She has completed over 4,000 levels on Candy Crush!
                                        </Card.Text>
                                        <Card.Link href="https://github.com/sarahhmi">GitHub</Card.Link>
                                        <Card.Link href="https://www.linkedin.com/in/sarah-mi-6832101aa/">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                    <div className="bar"/>
                </Container>

                <Container className="center" fluid>
                    <Carousel fade className="slideShowBar">
                        <Carousel.Item>
                            <img
                                className="slideShow"
                                src={slide_1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p>Ancil helps Brandon out.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideShow"
                                src={slide_2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <p>Charlie takes a photo for his scrapbook.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideShow"
                                src={slide_3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <p>Sarah laughs.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideShow"
                                src={slide_4}
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                <p style={{color: "black"}}>The team deliberates.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slideShow"
                                src={slide_5}
                                alt="Fifth slide"
                            />

                            <Carousel.Caption>
                                <p>Ancil and Charlie talk it out.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        )
    }


}
export default Creator_page;