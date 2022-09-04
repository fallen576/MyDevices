import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Device({mac,hostname,ip,ports}) {
    return (
        <div className="device card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">{hostname === "?" ? "Unable to determine name" : hostname}</h5>
                <Container>
                    <Row>
                        <Col>
                            <p>{mac}</p>
                        </Col>
                        <Col className="mb-2">
                            {ip}
                        </Col>
                    </Row>
                    <Row>
                        {
                            (ports.length > 0) ?
                            <Col className="mb-2">
                                Port List
                                <ul>
                                    {ports.map(port => {
                                        return <li>{port}</li>
                                    })}
                                </ul>
                            </Col>
                             : "No open ports"
                        }
                    </Row>
                </Container>
                <button className="btn btn-primary">Rescan</button>
                <button className="btn btn-danger">Delete</button> 
            </div>
        </div>
            )
        }
