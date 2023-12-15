
import { useState } from 'react';
import { Row, Form, Col } from 'react-bootstrap';
const FormInput = ({ data, onAdd }) => {

    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')
    const addNewItem = () => {
        data.push({ id: Math.random(), q: qu, a: an })
        setQu('')
        setAn('')
        onAdd()
    }
    return (
        <Row className="my-3">
            <Col sm="5">
                <Form.Control onChange={(e) => setQu(e.target.value)} value={qu} type="text" placeholder="ادخل السوال" />
            </Col>

            <Col sm="5">
                <Form.Control onChange={(e) => setAn(e.target.value)} value={an} type="text" placeholder="ادخل الاجابه" />
            </Col>
            <Col sm="2">
                <button onClick={addNewItem} className="btn-color w-100" type="submit">
                    اضافة
                </button>
            </Col>
        </Row>
    )
}

export default FormInput
