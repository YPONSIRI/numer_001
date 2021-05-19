const express = require("express");//เรียกใช้libraryที่รันapi
const app = express();
const cors = require("cors");//อ่านapi
const bodyParser = require("body-parser");
const mySql = require("mysql");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Extended
const swaggerOptions = {//developหน้าswagger ui
  swaggerDefinition:{
    info: {
      title: 'Customer API',
      description: "Customer API Informmaion",
      severs: ["http://localhost:7000/"]
    }
  },
  //route.js
  apis: ["index.js"]
 };
 
 const swaggerDocs = swaggerJsDoc(swaggerOptions);
 app.use('/index-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());//ให้swaggerอ่านapi

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));//แปลงให้เป็น.json
app.use(bodyParser.json());

//  app.listen(port, ()=> {
//    console.log('Sever listening on port ${port}');
//  });
// server listenning
app.listen(7000, function() {//เปิดport
  console.log("server start is port: 7000");
});

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "chommatt-2018",
  database: "getnumerdata",
  multipleStatements: true,//
});

//connect to database
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connect");
  }
});
//เรียกข้อมูลที่ต้องการดึงข้อมูล
/**
 * @swagger
 * /getdata:
 *  get:
 *   tags : ["Backend"]
 *   description: Use to request all customers
 *   responses:
 *     '200':
 *        description: A sucessful response
 */


//ดึงข้อมูลtablefordataขึ้นเว็บ
app.get("/getdata", (req, res) => {
  connection.query("SELECT * FROM tablefordata", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});



//เก็บเข้าจากหน้าเว็บtablefordata

app.post("/postdata", (req, res) => {
  const numerdata = req.body.numerdata;
  let command = "INSERT INTO tablefordata SET ?";
  connection.query(command, numerdata, (error, results) => {//เลือกแค่สิ่งที่จะเอาเข้าdata
    if (!error) {
      console.log(numerdata);
      res.send(numerdata);
    } else {
      console.log(error);
      throw error;
    }
  });
});

//เก็บข้อมูลจากหน้าเว็บ
// app.post("/post/service/inputnumer2", (req, res) => {
//   const Eq = req.body.Eq;
//   const XL = req.body.XL;
//   const XR = req.body.X;
//   const email = req.body.email;

//   let command = "INSERT INTO numer SET ?";
//   connection.query(command, Eq, XL, XR, email, (error, results) => {
//     if (!error) {
//       console.log(results);
//       res.send(results);
//     } else {
//       console.log(error);
//       throw error;
//     }
//   });
// });

//ดึงข้อมูลตัวล่าสุดที่inputมา
app.get("/getlast", (req, res) => {
  connection.query(
    "SELECT * FROM tablefordata ORDER BY id_data DESC LIMIT 1",
    (error, results) => {
      if (error) throw error;
      res.send(results); //may
    }
  );
});
