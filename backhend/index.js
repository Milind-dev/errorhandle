const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorhandler");
const { tryCatch } = require("./utils/trycatch");
const joi = require('joi')

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

const schema = joi.object({
    userId:joi.number().required(),
}) 
app.post("/login", tryCatch(async(req,res) => {    
        const {error,value} = schema.validate({}) 
        if(error) throw error;
        console.log(error)
    }
   )
  );
app.use(errorHandler);

app.listen(2000, () => {
  console.log("run 2000");
});
