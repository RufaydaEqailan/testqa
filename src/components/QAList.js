import React from 'react'
import { Row, Accordion } from 'react-bootstrap';

const QAList = ({ data, onDelete }) => {

    const deleteItem = (ID) => {

        const index = data.findIndex((item) => item.id === ID)
        data.splice(index, 1)
        onDelete(data)
    }
    const datalocal = JSON.parse(localStorage.getItem("items"))
    return (
        <Row>
            <Accordion>
                {


                    localStorage.getItem("items") != null ? (
                        datalocal.map((item, index) => {
                            return (
                                <Accordion.Item eventKey={item.id} key={index}>
                                    <Accordion.Header>
                                        <div className="m-auto">{item.q}</div>

                                    </Accordion.Header>
                                    <Accordion.Body className="text-end">
                                        <div className="px-3 d-inline ">{item.a}</div>
                                        <button onClick={() => { deleteItem(item.id) }} className="btn-color">مسح  </button>
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
