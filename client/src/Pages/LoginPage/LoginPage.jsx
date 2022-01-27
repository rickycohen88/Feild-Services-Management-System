import Login from "../../components/Login/Login"
import {Card}from "react-bootstrap"



function LoginPage(){

    return(
        <Card>
            <Card.Header style={{textAlign:'center'}}>Login</Card.Header>
            <Card.Body>
                <Login/>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    );
};

export default LoginPage