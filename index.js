const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3001;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req, res)=> {
  var sqlSelect = "SELECT * from customers";
    con.query(sqlSelect,(err, result) => {
      res.send(result);
  });
});

app.post("/api/insert", (req, res)=> {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const pwd = req.body.pwd;
  var sql = "INSERT INTO customers (name,email,mobile,password) VALUES (?,?,?,?)";
    con.query(sql,[name,email,mobile,pwd],(err, result) => {
      console.log(result);
  });
});

app.listen(3001,()=>console.log('App listening on port '+ port+'.'))
