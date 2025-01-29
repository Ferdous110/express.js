const app = require("./app")

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Server is runing at http://localhost:${PORT}`);
 });