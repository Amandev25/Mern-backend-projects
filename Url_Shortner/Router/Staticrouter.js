import express from "express";
const Router = express.Router();

Router.get('/' , (req,res) => {
    res.render("home")
})
Router.get('/sign' , (req , res)=> {
    return res.render('sign');
})
Router.get('/login',(req,res)=>{
    return res.render('login')
})

export default Router ;
