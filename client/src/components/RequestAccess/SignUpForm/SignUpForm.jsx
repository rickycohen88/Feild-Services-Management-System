import { useState } from "react";
import dataRequest from "../../../Utils/axios";
import { Form, Button, Container } from "react-bootstrap";
function SignUpForm(props) {
  const [user, setUser] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    street: "",
    street2: "",
    city: "",
    zip: "",
    phone: "",
  });
  

  function checkInPut (e){
    e.preventDefault();
    if(user.firstName !==""){
      if(user.lastName !==""){
        if(user.email.indexOf('.com')>-1){
          if(user.password.length>9){
            if(user.password.indexOf(/\d/)){
              if(user.password.indexOf(/[a-z]/)){
                if(user.password.indexOf(/[A-Z]/)){
                  if(user.password.indexOf(/[!@#%&$^*()]/)){
                    if(user.street !==""){
                      if(user.city !==""){
                        if(user.zip !==""){
                          if(user.phone !==""){
                            sendIt(e);
                          }
                          else{alert("your phone entree is empty")}
                        }
                        else{alert("your zip is empty")}
                      }
                      else{alert("Your city entry is empty")}
                    }
                    else{alert("Your street entree is empty")}
                  }
                  else{alert("your password dose not contain any special characters")}
                }
                else{alert("your password dose not contain any uppercase letters")}
              }
              else{alert("your password dose not contain any lowercase letters")}
            }
            else{alert(" your password dose not contain any numbers");}
          }
          else{alert("your password is not long enough")}
        }
        else{alert("There is an issue with your entree.")}
      }
      else{alert("There is an issue with your last name entree.")}
    }
    else{alert("There is an issue with your first name entree.")}
  };
  function sendIt(e) {
    e.preventDefault();
    console.log(user);
    let x = {
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      password:user.password,
      address:{
        street:user.street,
        street2:user.street2,
        city:user.city,
        zip:user.zip,
      },
      phone:user.phone,
    };
    console.log(x);
      dataRequest.post("/user/login", x)
      .then((res) => {
        console.log(res);
        setUser({
          firstName: "",
          lastName:"",
          email: "",
          password: "",
          street: "",
          street2: "",
          city: "",
          zip: "",
          phone: "",
        });
        props.closeRequest();
        alert("Request Submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
    <Form onSubmit={checkInPut}>
      <Form.Group controlId="fisrtName">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="first"
          onChange={(e) => {
            setUser({...user, firstName: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="last"
          onChange={(e) => {
            setUser({...user, lastName: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label></Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          onChange={(e) => {
            setUser({...user, email: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          onChange={(e) => {
            setUser({...user, password: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="address.street">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="street address, number and name"
          onChange={(e) => {
            setUser({...user,street: e.target.value  });
          }}
        />
      </Form.Group>
      <Form.Group controlId="address.street2">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="appartment number or like"
          onChange={(e) => {
            setUser({...user,street2: e.target.value  });
          }}
        />
      </Form.Group>
      <Form.Group controlId="address.city">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="city"
          onChange={(e) => {
            setUser({...user, city: e.target.value  });
          }}
        />
      </Form.Group>
      <Form.Group controlId="address.zip">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="zip"
          onChange={(e) => {
            setUser({...user, zip: e.target.value  });
          }}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="phone number, no dashes, 10 digits"
          onChange={(e) => {
            setUser({...user, phone: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="submitButton">
        <Button  variant="outline-primary" type="submit" onSubmit={checkInPut}>
          Submit
        </Button>
      </Form.Group>
    </Form>
    </Container>
  );
}
export default SignUpForm;
