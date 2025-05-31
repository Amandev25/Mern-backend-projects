import express from "express";
import path from "path"
import route from "./Router/router.js";
import connectToMongoDB from './connect.js';
import URL from "./models/url.js"
import staticRouter from "./Router/Staticrouter.js"
const app = express();
const port = 8000;

// ✅ Parse JSON first
app.use(express.json());

// ✅ Setup routes
app.use("/url", route);
app.use("/" , staticRouter);
// Setting for EJS 
app.set("view engine" , "ejs");
app.set("views" , "./views")




// ✅ Connect to DB
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log('MongoDB Connected'));

app.use('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    // Renders notfound.ejs instead of plain text
    return res.status(404).render('notfound');
  }

  res.redirect(entry.redirectURL);
});

// ✅ Start server
app.listen(port, () => console.log(`Server Listens at PORT: ${port}`));

