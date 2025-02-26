const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./Routes/connect");
const userRoutes=require("./Routes/UserLogin");
const MailRoutes=require("./Routes/MailRouter");
const FaqRoutes=require("./Routes/FaqRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connect();
app.use("/user",userRoutes);
app.use("/email",MailRoutes);
app.use("/faq",FaqRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
