import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const home =(req,res) =>{
    console.log (`hi`);
    return res.send(`there's nothing made yet.`);
}

const login =(req,res)=>{
    return res.send(`login`);
}

app.use(logger);
app.get("/", home);
app.get("login", login);

const handleListening = ()  => console.log(`✔ Server listening on port https://localhost:${PORT} 🐱‍🏍`);
app.listen(PORT,handleListening);