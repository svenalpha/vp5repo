

import express from "express";
import ViteExpress from "vite-express";  
import path from "path";

const app = express();

//    ViteExpress.config({ mode: "development"});  //"production" })  //  test for preview, development by default
 //       ViteExpress.config({ mode: "production"});   // NODE_ENV=production node server.ts     NODE_ENV=development node server.ts
 //  ViteExpress.config({ mode: "test"}); 
  //console.log(" procss.env = ",process.env);
//console.log("import.meta.env",import.meta.env);

//console.log(" __dirname = ",__dirname);
app.get("/", (_, res) => res.send("Hello from  home"));
//app.get("/about", (_, res) => {res.sendFile("c:/web/a5/vp5/about.html");});  
var __dirname = path.resolve(path.dirname('')); 
app.get("/about", (_, res) => {res.sendFile("./about.html",{root: __dirname});}); 


app.get("/contact", (_, res) => res.send("Hello from  contact express!")); 
app.get("*", (_, res) => res.send("Hello from  404 404 404"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));


