const express = require("express");
const app = express();

const mongoose = require("mongoose");
// app.use("/", (req, res) => {
//   console.log("This is main url...");
// });
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.WESERVER_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("2021", () => {
  console.log("Backend is running...");
});
