import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Device from './Device'

export default function DeviceTable() {

    const [deviceList, setDeviceList] = useState([]);
    const [filter, setFilter] = useState([]);

    const handleChange = event => {
        setFilter(event.target.value);
    }

    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data[0].hostname);
                setDeviceList(data);
            });
    }, []);
    return (
        <Container>
            <h4>Filter Devices inline form most likely</h4>
            <input className="input mb-2" type="text" onChange={handleChange}/>
            {
                (deviceList.length === 0) ?
                    <p>loading...</p> :
                    <Row>
                        {deviceList.filter(device => device.hostname.includes(filter)).map(device => 
                        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-2">
                            <Device mac={device.mac} hostname={device.hostname} ip={device.ip} ports={device.openPorts} />
                        </Col>
                        )}
                    </Row>
            }
        </Container>
    )
}
