import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Device from './Device'

export default function DeviceTable() {

    const [deviceList, setDeviceList] = useState([]);

    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => {
                console.log(data[0].hostname);
                setDeviceList(data);
            });
    }, []);
    return (
        <Container>
            {
                (deviceList.length === 0) ?
                    <p>loading...</p> :
                    <Row>
                        {deviceList.map(device => 
                        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                            <Device mac={device.mac} hostname={device.hostname} ip={device.ip} />
                        </Col>
                        )}
                    </Row>
            }
        </Container>
    )
}
