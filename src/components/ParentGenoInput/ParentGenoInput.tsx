import React, {useState} from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import '../../style.css';

interface Genotype {
  a: string;
  e: string;
  d: string;
};

const ParentGeno = () => {
  const [sireGenoInput, setSireGenoInput] = useState( "" );
  const [damGenoInput, setDamGenoInput] = useState( "" );


  // TODO: 
  // - Validation
  // - Generate random pair if not present (for dominate -Dd/DD - set homozygous as slightly less common)

  const handleSubmit = ( e: any ) => {
    e.preventDefault(); // Prevent default refresh

    console.log( getInput( sireGenoInput ) );
  };

  const handleSireChange = ( e: any ) => {
    setSireGenoInput( e.target.value );
  };

  const handleDamChange = ( e: any ) => {
    setDamGenoInput( e.target.value );
  };

  // Split input into array with a#, e#, d#
  // a and e alleles are required (these are 'base', prefer not to randomize)
  const getInput = ( input: string ) => {
    var splitArray = input.split( '/' ).map( ( a: string ) => a.trim() );
    var requiredPresent = false;
    //  var sortedGeno = {a: "", e: "", d: ""};
    var sortedGeno = {} as Genotype;

    // Check a & e exist
    if ( ( input.includes( "A" ) || input.includes( "a" ) ) && ( input.includes( "E" ) || input.includes( "e" ) ) ) {
      requiredPresent = true;
      console.log( requiredPresent );
    }

    // Convert pairs to number
    // 0 = recessive homozygous -aa
    // 1 = dominate homozygous -AA
    // 2 = heterozygous -Aa
    for ( var i in splitArray ) {
      if ( splitArray[i].toLowerCase() === splitArray[i] ) {
        splitArray[i] = splitArray[i].replace( /.$/, "0" )
        console.log( splitArray[i] );
      } else if ( splitArray[i].toUpperCase() === splitArray[i] ) {
        splitArray[i] = splitArray[i].replace( /.$/, "2" ).toLowerCase();
        console.log( splitArray[i] );
      } else {
        // isPascalCase = /^[A-Z][a-z]*$/.test(splitArray[i]);
        splitArray[i] = splitArray[i].replace( /.$/, "1" ).toLowerCase();
        console.log( splitArray[i] );
      }
    };

    // Assign to genotype
    sortedGeno.a = splitArray.filter( i => i.includes( 'a' ) )[0];
    sortedGeno.e = splitArray.filter( i => i.includes( 'e' ) )[0];
    sortedGeno.d = splitArray.filter( i => i.includes( 'd' ) )[0];

    console.log( "full array ----------- " + splitArray );
    console.log( "sortedGeno ----------- " + sortedGeno );
    return sortedGeno;
  };


  // // Process both parents genotypes
  // const processGenotypes = () => {
  //   var sire = getInput( sireGenoInput );
  //   var dam = getInput( damGenoInput );

  //   // Match parents on alleles
  //   for ( var i in sire ) {
  //     // if dam === sire
  //   }
  // };

  // Take processed genotypes and combine parents for potential outcome

  return (
    <Form className="parentInputBox" onSubmit={( e ) => {handleSubmit( e )}}>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="sireGeno">
            <Form.Label>Sire aa/Ee/DD</Form.Label>
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
