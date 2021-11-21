import React, {Component} from "react";
import Settings from "./settings";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import stock from "../imgs/stock_photo.jpg";
import sarah from "../imgs/sarah.jpg";
import mark from "../imgs/mark.jpg";
import ancil from "../imgs/ancil.png";
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
                                        Brandon Xu is a CS/DS Student.
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
                                    <Card.Img className="border" variant="top" src={stock} />
                                    <Card.Body>
                                        <Card.Title>Lucy Cheng</Card.Title>
                                        <Card.Text>
                                            Lucy is a CS Student.
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
                                            Ancil is a CS student in the Cybersecurity track.
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
                                    <Card.Img className="border" variant="top" src={stock} />
                                    <Card.Body>
                                        <Card.Title>Charlie Hyun</Card.Title>
                                        <Card.Text>
                                            Charlie is a CS/DS student on the Software Engineering and Machine Intelligence track.
                                            <br/>He loves eating Indiana's famous food, especially barbecue!
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
                </Container>
                <Container className="center" fluid>
                    <p>Add a slideshow of fun pictures here</p>
                </Container>
            </div>
        )
    }


}
export default Creator_page;