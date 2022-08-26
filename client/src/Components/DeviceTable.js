import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Device from './Device'

export default function DeviceTable() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                    <Device />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                    <Device />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                    <Device />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                    <Device />
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                    <Device />
                </Col>
                
                
            </Row>
        </Container>
    )
}
