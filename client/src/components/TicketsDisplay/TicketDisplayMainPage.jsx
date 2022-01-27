import "./TicketDisplayPageMain.css";
import {
    Tabs,
    Tab,
} from "react-bootstrap";

function TicketDisplayPageMain(){

    return(
       <Tabs defaultActiveKey="today" id="tickets" className="mb-3">
           <Tab eventKey="today" title="Today">

           </Tab>
           <Tab eventKey="open" title="Open">

           </Tab>
           <Tab eventKey="closed" title="Closed">

           </Tab>
       </Tabs>
    );
};

export default TicketDisplayPageMain;