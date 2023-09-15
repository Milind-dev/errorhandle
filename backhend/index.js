const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorhandler");
const { tryCatch } = require("./utils/trycatch");

const app = express();
// app.use(app.json())
app.use(morgan("dev"));
app.use(cors());

const getUser = () => undefined;
app.get(
  "/test",
  tryCatch(async (req, res, next) => {
    // const name = user.name;
    const user = getUser();
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).json({ status: true });
  })
);

app.post("/login", async (req, res) => {
  try {
    const user = getUser();
    if (!user) {
      throw new Error("user not found");
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
  return res.status(200).json({ status: true });
});
app.use(errorHandler);

app.listen(2000, () => {
  console.log("run 2000");
});
