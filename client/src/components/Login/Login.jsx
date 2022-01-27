import { Form, Button, Container,} from "react-bootstrap";
import { useState } from "react";
import dataRequest from "../../Utils/axios";
import ForgotEmail from "../ForgotEmail/ForgotEmail"
import RequestAccess from "../RequestAccess/RequestAccess"
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[showForgot,setShowForgot] = useState(false);
    const[showRequest,setShowRequest] = useState(false);
    const closeForgot = () => setShowForgot(false);
    const closeRequest = () => setShowRequest(false);
    const seeShowForgot = () => setShowForgot(true);
    const seeShowRequest = () => setShowRequest(true);
    
    function handleLoginSubmit(e) {
      e.preventDefault();
      console.log("inside submit");
      console.log(email&&password);
        dataRequest.get('/user/login',{email:email,password:password})
        .then((res)=>{
          console.log("----")
          console.log(res);
          // use props.setUser to push up user credentials
          setEmail("");
          setPassword("");
      }).catch((err)=>{console.log(err);});
    };

  return (
    <Container>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="emailEntree">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter email"
            onChange={(e)=>{setEmail(e.target.value);}}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId="passwordEntree">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter password"
            onChange={(e)=>{setPassword(e.target.value);}}
            value={password}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="outline-primary" type="submit" onSubmit={handleLoginSubmit}>Submit</Button>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="requestButtons">
          <Button onClick={seeShowForgot}>Forgot Password</Button>
            <ForgotEmail email={email} setEmail={setEmail} showForgot={showForgot} closeForgot={closeForgot}/>
          <Button onClick={seeShowRequest}>Request Access</Button>
            <RequestAccess showRequest={showRequest} closeRequest={closeRequest}/>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
