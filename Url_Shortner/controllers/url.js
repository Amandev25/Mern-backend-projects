import shortid  from "shortid";
import URL from "../models/url.js"


export async function handleGenerateNewShortURL(req , res){
    const body = req.body;
    if(!body.url){return res.status(400).json({msg : "URL is Required"})}
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : [], 
    });

    return res.json({id : shortID});
}


// Analytics Functions : 

export async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks : result.visitHistory.length , 
        analytics: result.visitHistory, 
    })
}


