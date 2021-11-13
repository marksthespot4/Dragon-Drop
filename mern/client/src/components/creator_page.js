import React, {Component} from "react";
import Settings from "./settings";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import stock from "../imgs/stock_photo.jpg";
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
                                    <Card.Link href="#">GitHub</Card.Link>
                                    <Card.Link href="#">LinkedIn</Card.Link>
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
                                        <Card.Link href="#">GitHub</Card.Link>
                                        <Card.Link href="#">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={stock} />
                                    <Card.Body>
                                        <Card.Title>Ancil Trent</Card.Title>
                                        <Card.Text>
                                            Ancil is a CS student in the Cybersecurity track.
                                        </Card.Text>
                                        <Card.Link href="#">GitHub</Card.Link>
                                        <Card.Link href="#">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={stock} />
                                    <Card.Body>
                                        <Card.Title>Mark Lim</Card.Title>
                                        <Card.Text>
                                            Mark is a CS/DS student on the Software Engineering track.
                                        </Card.Text>
                                        <Card.Link href="#">GitHub</Card.Link>
                                        <Card.Link href="#">LinkedIn</Card.Link>
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
                                            Charlie is a lil bich
                                        </Card.Text>
                                        <Card.Link href="#">GitHub</Card.Link>
                                        <Card.Link href="#">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="card">
                                <Card border="dark" >
                                    <Card.Img className="border" variant="top" src={stock} />
                                    <Card.Body>
                                        <Card.Title>Sarah Mi</Card.Title>
                                        <Card.Text>
                                            Sarah is a CS/DS student on the Software Engineering and Machine Intelligence track.
                                        </Card.Text>
                                        <Card.Link href="#">GitHub</Card.Link>
                                        <Card.Link href="#">LinkedIn</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                    <div className="bar"/>
                </Container>
                <Container className="center" fluid>
                    <p>Add a slideshow of fun pictures here</p>
                </Container>
            </div>
        )
    }


}
export default Creator_page;