import express from "express";
import bodyParser from "body-parser";
import influencerRouter from "./src/routes/influencer";

const app = express();
app.use(bodyParser.json());

app.use("/influencer", influencerRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
