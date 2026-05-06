//1    todo-project
//    introduction to-project
//    what we are building
//    initialize project(npm init -y)
//     install nodemon express cors
//      create server.js
//      test /route
//  depdences  ?
//   dev dependence ?
// module structure ?
// valdation or error ?  and error handling ?
//req.body ?
// default ?: agar value na melen ye use hota hee
// modals jo hota he db se connect hota hee
// schema hota jo structure define krta he
// modal extual data create krne ke sath sath create krta he find krna find by id get put patch delet schema modal done me kr sakten he 
// validation ke leyen use hota or scture define krta he modals
// controller me sirf logic lekha jata hee
// contoler me models ko import krte
// controller ko models todo.model.js me import krten hee

//2. EXPRESS Routing + Moduler Structure
   // create routing folder
   //create todo.rounting.js
   //setup basic get route
   //Import routing in server

 //3.MongoDb Setup + mongooose connection
 // install mongoose
 // connection to mongose
 // .env file setup
 //TEST DB connection  

 //4. craete todo modal (schema)
 //  --title
 // --description
 // --timestemps
 // --Export Model
 // --Schema validation Basic
 //5. create todo API (POST)
 // CREATE Controller 
 //ADD Post api/todos
 //Validation
 //Return create Todo
 // test with Postman/tunder Clint
 //6. Get All todos(API)  //yee sara ham Controller me kr sakten hee
//   --Get /api/todos
//   --pagination
//   --sorting
//   Search by tittle
//   Test api
// Query parmas ?
// req.body ?
// base query ?
// search by tittle ?
// sorting ?
// option i ?
// sortoption ?
// pagination formula ?
// get todo router ko controller me banayhen he usko ham router me import kengee or router me router.get ('/',gettodo)
// search ->?search=mean
// sort ->?sort=asc note ->asc start hone lagege phlene  (asending order)
// sort ->?sort=desc note ->asc start hone lagege phlene  (desc order)
// pagination->?page=1&limit=2  notes aise krte page 1 me 2 data
// all sortin pagination ak sath ->
// get api me pagination ,sorting ,searchig all
// searching ke leyen regex method use hota jo spcific element ko find krta hee
// default ?
// query ?
// query find ?
// all ak sath run sort limit pagination ->http://localhost:3001/api/todos?search=a&page=1&limit=1&sort=desc
// get singal todo by id
// get/api/todo/:api
// validation
// handle wrong id
// clean response
// controller me mongoose import krten hee 
// start lecture 8
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import todoroutes from "./Routes/todo-route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || Todo;

// DB connect
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/todos", todoroutes);

// server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});