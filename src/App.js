import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import FormInput from './components/FormInput'
import QAList from './components/QAList'
import { question } from './data';

function App() {
  const [data, setdata] = useState(question)
  const addItem = () => {
    setdata([...data])
    localStorage.setItem("items", JSON.stringify([...data]))
  }
  const deleteAllItems = () => {

    question.splice(0, question.length)
    setdata([])
    localStorage.removeItem("items")

  }
  const deleteOneItem = (items) => {
    setdata([...items])
    localStorage.setItem("items", JSON.stringify([...items]))
    if (items.length === 0) {
      deleteAllItems()
    }
  }

  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInput data={data} onAdd={addItem} />
            <QAList data={data} onDelete={deleteOneItem} />
            {
              localStorage.getItem("items") != null ? (<button onClick={deleteAllItems} className="btn-color w-100 my-3">مسح الكل</button>) : null
            }

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
