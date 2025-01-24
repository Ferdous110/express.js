const app = require("./app");

const PORT = 3002;

app.listen(PORT,(req,res)=>{
    console.log(`Surver is runing http://localhost:${PORT}`);
})