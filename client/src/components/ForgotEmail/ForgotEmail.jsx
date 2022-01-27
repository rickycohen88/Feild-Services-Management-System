import { Form, Button, Modal, } from "react-bootstrap";
import dataRequest from "../../Utils/axios";


function ForgotEmail (props) {

  function forgotEmailSubmit(e){
    e.preventdefault();
    dataRequest.get('/user/lostPassword',{email:props.email});
    props.closeForgot();
    alert("request submitted");
  };

    return(
        <Modal show={props.showForgot} onHide={props.closeForgot}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{textAlign:'center'}}>Please enter your email. If it matches our records, an email will be sent to you with instructions.</span>
          <Form>
            <Form.Group controlId="forgotEmailEntree">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={(e)=>{props.setEmail(e.target.vale);}}
                value={props.email}
              />
            </Form.Group>
            <Form.Group>
               <Button variant="primary" onClick={(e)=>forgotEmailSubmit}>
            Submit
          </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeForgot}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    );
}
export default ForgotEmail;