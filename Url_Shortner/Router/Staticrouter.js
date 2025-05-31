import express from "express";
const Router = express.Router();

Router.get('/' , (req,res) => {
    res.render("home")
})

export default Router ;