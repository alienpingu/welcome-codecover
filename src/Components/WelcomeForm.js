import React, {useState} from 'react';


import {
    Form,
    Row,
    Col,
    InputGroup,
    Button
} from 'react-bootstrap'

export default function FormExample() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form 
      noValidate 
      validated={validated} 
      onSubmit={handleSubmit} 
      action="https://formspree.io/f/mzbyllng" 
      method="POST"
      encType="multipart/form-data"
    >
      <h2>Effettua subito il tuo ordine via:</h2>
      <Row className="mb-3">
        <Col xs={12} lg={6}><Button as="a" href="https://api.whatsapp.com/send/?phone=%2B393755756800" variant="outline-success">WhatsApp</Button></Col>
        <Col xs={12} lg={6}><Button as="a" href="mailto:info@codecover.it" variant="outline-primary">E-mail</Button></Col>
      </Row>
      <Row className="mb-3">
        <h6>Altrimenti compila il form per esser ricontattato via e-mail</h6>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            defaultValue=""
            name="nome"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cognome"
            defaultValue=""
            name="cognome"
          />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="user@gmail.com"
              aria-describedby="inputGroupPrepend"
              name="_replyto"
              required
            />
            <Form.Control.Feedback type="invalid">
              Perfavore inserire una email corretta
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="num"
            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')}
            placeholder="3216549877"
            defaultValue=""
            name="phone"
          />
        </Form.Group>
      </Row>
{/*      <Row className="mb-3">
       <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Scegli modello</Form.Label>
         <Form.Select aria-label="Default select example" name="modello">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
            />
            <Form.Control.Feedback type="invalid" >
              {"Caricare un QR code"}
            </Form.Control.Feedback>
          </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Indirizzo</Form.Label>
          <Form.Control type="text" placeholder="Via Milano 44" name="indirizzo"required />
          <Form.Control.Feedback type="invalid">
            Perfavore inserire un indirizzo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Città</Form.Label>
          <Form.Control type="text" placeholder="Città" name="città" required />
          <Form.Control.Feedback type="invalid">
            Perfavore inserire una città
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Codice Postale</Form.Label>
          <Form.Control type="text" placeholder="20123" name="zip" required />
          <Form.Control.Feedback type="invalid">
            Inserire un codice postale
          </Form.Control.Feedback>
        </Form.Group>
      </Row>*/}
      <Form.Group className="mb-3">
      
        <Form.Check
          required
          label="Accetto i termini e le condizioni"
          feedback="Devi accettare i termini e le condizioni"
          feedbacktype="invalid"
        />
      </Form.Group>
      <Button type="submit">Invia</Button>
    </Form>
  );
}

