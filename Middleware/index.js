const app = require("./app")
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("hello my name is anjum ferdous");
})

app.listen(PORT,()=>{
    console.log(`server is runing http://localhost:${PORT}`);
})