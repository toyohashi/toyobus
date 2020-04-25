import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import result from './data';

const displayResult =()=>{
    const data = result;
    const departure = '技科大前';
    const arival = '豊橋駅前';
    const [open,setOpen] = useState(false);
    const i = 0;

    return(
        <Container>
            <Row>
                <Col xs={5}>
                    <h5 className="departute">{departure}</h5>
                </Col>
                <Col xs={2}>
                    <div className="arrow">-></div>
                </Col>
                <Col xs={5}>
                    <h5 className="arival">{arival}</h5>
                </Col>
            </Row>
            
                <div>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <Row>
                            <Col xs={2}>
                            <h1 className="resultNum">{i+1}</h1>
                            </Col>
                            <Col>
                                <Row>
                                    <h1>{data[(i+1).toString()].departureTime}->{data[(i+1).toString()].arivalTime}
                                    </h1>
                                </Row>
                                <Row>
                                    <h1>片道: {data[(i+1).toString()].price}</h1>

                                </Row>
                            </Col>
                        </Row>
                    </Button>
                    <Collapse in={open}>
                        <div id='example-collapse-text'>
                            Sample route display here
                        </div>
                    </Collapse>


                </div>
                
            }

        </Container>
    )
}

export default DisplayResult;