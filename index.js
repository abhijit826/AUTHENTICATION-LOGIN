import express from "express";

import bodyParser from "body-parser";

const app = express();

var userIsAuth = false;
app.use(bodyParser.urlencoded({ extended: false }));
function PasswordChecking(req,res,next){
  const Check = req.body["password"];
  if(Check==="Abhijit@123"){
    userIsAuth = true;
  }
  next();
}
app.use(PasswordChecking);
app.get("/", function(req, res)  {
  res.sendFile(process.cwd() + "/index.html");
});
app.post("/Check", function (req, res)  {
  if (userIsAuth) {
    res.sendFile(process.cwd() + "/index2.html");
  }
  else  {
    res.sendFile(process.cwd() + "/index.html");
  }
});
app.post("/logout", function(req, res)  {
  (userIsAuth) =false;
    res.sendFile(process.cwd() + "/index.html");
});
app.listen(3000, function()  {
  console.log("server is ok and is currently running there");
});
