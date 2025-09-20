const express=require("express");
const app=express();
const cors= require("cors");
const mysql=require("mysql");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"master"
});
app.get("/",(req,res)=>{
    const sql ="select * from customer";
    db.query(sql,(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
});

app.get('/read/:cust_id',(req,res)=>{
  const sql = "Select * from customer where cust_id =?";
  const cust_id = req.params.cust_id;
  
  db.query(sql,[cust_id],(err,data)=>{
    if(err) return res.json("Error");
    return res.json(data);
  });
})


app.post("/Customer", (req, res) => {
  console.log("Recieved data from frontend:",req.body);  
  const sql = "INSERT INTO Customer (cust_id,cust_name,cust_address,cust_amount) VALUES (?)";
  const values = [
    req.body.cust_id,
    req.body.cust_name,
    req.body.cust_address,
    req.body.cust_ammount
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});


app.listen(8081, ()=> {
        console.log("listening");
});