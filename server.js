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
//req.body ?
// default ?: agar value na melen ye use hota hee
// modals jo hota he db se connect hota hee
// schema hota jo structure define krta he
// modal extual data create krne ke sath sath create krta he find krna find by id get put patch delet schema modal done me kr sakten he 
// validation ke leyen use hota or scture define krta he modals
// controller me sirf logic lekha jata hee
// contoler me models ko export krte
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

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import todoroutes from "./Routes/todo-route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001;

// DB connect
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", todoroutes);

// server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});