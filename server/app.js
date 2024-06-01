const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authenticationRouter = require("./connectors/authenticationRouter");
const messageRouter = require("./connectors/messageRouter");
const conversationRouter = require("./connectors/conversationRouter");
const userRouter = require("./connectors/userRouter");
const { app, server } = require("./socket/socket");

dotenv.config();

app.use(express.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

//  Routers
app.use("/api/auth", authenticationRouter);
app.use("/api/message", messageRouter);
app.use("/api/converation", conversationRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Server running on  port", PORT);
});
