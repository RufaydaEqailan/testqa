import { Container, Row, Col } from 'react-bootstrap'
import FormInput from './components/FormInput'
import QAList from './components/QAList'

function App() {

  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInput />
            <QAList />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
