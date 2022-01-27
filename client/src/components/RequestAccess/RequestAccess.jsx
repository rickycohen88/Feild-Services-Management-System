import {Button, Modal } from "react-bootstrap";
import SignUpForm from "./SignUpForm/SignUpForm"



function RequestAccess (props) {
    
    return(
        <Modal show={props.showRequest} onHide={props.closeRequest}>
        <Modal.Header closeButton>
          <Modal.Title>Request Access Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm closeRequest={props.closeRequest}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeForgot}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default RequestAccess;