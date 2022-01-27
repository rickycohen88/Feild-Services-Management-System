import {Table} from "react-bootstrap";
import "./ConsumablesPage.css";
import dataRequest from "../../Utils/axios";
import { useEffect, useState } from "react";

function ConsumablesPage (){
    const [Consumables,setConsumables] = useState({});
    useEffect(()=>{
        dataRequest.get('/getConsumables')
        .then((res)=>{setConsumables(res);})
    });

    return (
        <Table>
            <thead>
                <tr>
                    {Array.from(Consumables).map((value,index)=>)}
                </tr>
            </thead>

        </Table>
    );
}

export default ConsumablesPage;