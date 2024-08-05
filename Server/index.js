const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./Route/userRoute")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use(cors());



mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });

app.use('/api',userRoute)

