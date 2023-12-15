import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
const QAList = ({ data }) => {

    return (
        <Row>
            <Accordion>
                {
                    data.length ? (
                        data.map((item, index) => {
                            return (
                                <Accordion.Item eventKey={item.id} key={index}>
                                    <Accordion.Header>
                                        <div className="m-auto">{item.q}</div>

                                    </Accordion.Header>
                                    <Accordion.Body className="text-end">
                                        <div className="px-3 d-inline ">{item.a}</div>
                                        <button className="btn-color">مسح  </button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )

                        })
                    ) : null
                }

            </Accordion>
        </Row>
    )
}

export default QAList
