const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
// app.use(app.json())
app.use(morgan("dev"));
app.use(cors());

const getUser = () => undefined;
app.get("/test", async (req, res) => {
  // const name = user.name;
  try {
    const user = getUser();
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    return res.status(400).send(error.message);  //send is not key ("", error.message) errorcapture come
  }
 return res.status(200).json({ status: true });
});

app.post('/login',async (req,res) => {
    try {
        const user = getUser();
        if(!user){
            throw new Error("user not found")
        }    
    } catch (error) {
        return res.status(400).send(error.message);
    }
    return res.status(200).json({status:true});
})

app.listen(2000, () => {
  console.log("run 2000");
});
