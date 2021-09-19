import React, { useState } from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import '../../style.css';

const ParentGeno = () => {
  const [sireGenoInput, setSireGenoInput] = useState("");
  const [damGenoInput, setDamGenoInput] = useState("");
  
  const handleSubmit = (e:any) => {
    e.preventDefault(); // Prevent default refresh

    var sireSplit = splitInput(sireGenoInput);
    var damSplit = splitInput(damGenoInput);
    console.log("split up--------- " + sireSplit);

  };

  const handleSireChange = (e:any) => {
    setSireGenoInput(e.target.value);
  };

  const handleDamChange = (e:any) => {
    setDamGenoInput(e.target.value);
  };

  const splitInput = (i:string) => {
    var fullInput = i;
    var splitArray = fullInput.split(',').map((a: string) => a.trim());

    return splitArray;
  };

  return (
    <Form className="parentInputBox" onSubmit={(e) => {handleSubmit(e)}}>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="sireGeno">
            <Form.Label>Sire</Form.Label>
            <Form.Control
              required
              type="text"
              name="sireGeno"
              defaultValue={sireGenoInput}
         //     value={sireGenoInput}
              onChange={handleSireChange}
              placeholder="Aa/ee/dd" />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="damGeno">
          <Form.Label>Dam</Form.Label>
          <Form.Control
            required
            type="text"
            name="damGeno"
            defaultValue={damGenoInput}
        //    value={damGenoInput}
            onChange={handleDamChange}
            placeholder="Aa/ee/dd" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button 
            variant="primary"
            type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ParentGeno;
