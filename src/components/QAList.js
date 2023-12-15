import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
const QAList = () => {

    return (
        <Row>
            <Accordion>
                <Accordion.Item eventKey={1}>
                    <Accordion.Header>
                        <div className="m-auto"></div>

                    </Accordion.Header>
                    <Accordion.Body className="text-end">
                        <div className="px-3 d-inline "></div>
                        <button className="btn-color">مسح  </button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
    )
}

export default QAList
