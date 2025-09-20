import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Read = () => {
  const{cust_id}=useParams();
  const[customer,setCustomer]=useState([]);

  useEffect(()=>{
    axios 
        .get("http://localhost:8081/read/"+ cust_id)
        .then((res)=>{
            console.log(res);
            setCustomer(res.data);
        })
        .catch((err)=>console.log(err));

  },[]);
  return(
    <div>
        {customer.length> 0 ?(
            <>
            <h2>{customer[0].cust_id}</h2>
            <h2>{customer[0].cust_name}</h2>
            <h2>{customer[0].cust_address}</h2>
            <h2>{customer[0].cust_ammount}</h2>
            </>
        ):(<p>loading...</p>
        )}
    </div>
  )
}

export default Read