import {useState} from 'react';
import dataRequest from '../../Utils/axios';
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./EmailForm.css";



function EmailForm() {
 const [email,setEmail]=useState("");
  function emailSubmit(e){
    e.preventDefault();
    dataRequest.post('/emailRequest',{email:email})
    .then((res)=>{
      console.log(res);
      setEmail("");
    })
    .catch((err)=>{console.log(err)});
  
 }

  return (
    <Container>
      <Form onSubmit={emailSubmit}>
        <InputGroup>
          <FormControl
            placeholder="Recipient's email"
            aria-label="Recipient's email"
            aria-describedby="basic-addon2"
            id = "email"
            value = {email}
            onChange ={(e)=>{setEmail(e.target.value);}}
          />
          <InputGroup.Append>
            <Button variant="outline-primary" type="submit" onSubmit={emailSubmit} >Submit</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default EmailForm;
