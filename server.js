

import express from "express";
import ViteExpress from "vite-express";

const app = express();

//    ViteExpress.config({ mode: "development"});  //"production" })  //  test for preview, development by default
    ViteExpress.config({ mode: "production"});   // NODE_ENV=production node server.ts     NODE_ENV=development node server.ts
 //  ViteExpress.config({ mode: "test"}); 
  //console.log(" procss.env = ",process.env);
//console.log("import.meta.env",import.meta.env);

app.get("/message", (_, res) => res.send("Hello from  hhhxxx express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));


