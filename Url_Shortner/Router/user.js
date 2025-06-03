import express from "express";
import {handleUserSignup,handleUserlogin}  from "../controllers/user.js";
const Userrouter =express.Router();

Userrouter.post('/' , handleUserSignup);
Userrouter.post('/login' , handleUserlogin);

Userrouter.get("/signup" , (req,res) => {
    return res.render("home");
});

export default Userrouter ; 