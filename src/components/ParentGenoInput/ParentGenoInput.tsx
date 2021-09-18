import React from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import '../../style.css';

class ParentGeno extends React.Component<any, any> {

handleSubmit() {
}

    render() {
        return (
          <Form className="parentInputBox">
            <Row>
              <Col xs={6}>
              <Form.Group className="mb-3" controlId="sireGeno">
                <Form.Label>Sire</Form.Label>
                <Form.Control type="text" placeholder="Aa/ee/dd" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="damGeno">
                <Form.Label>Dam</Form.Label>
                <Form.Control type="text" placeholder="Aa/ee/dd" />
              </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col xs={12}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              </Col>
            </Row>
            </Form>
        )
  };
}

export default ParentGeno;
