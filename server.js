const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/", (req,res)=>{
    res.json({message: 'hello word!'})
});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`server funcionando na porta ${port}.`);
})

