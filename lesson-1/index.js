
const app = require('./app');


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`);
})