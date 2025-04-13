const express = require('express');
const app = express();

const PORT = 7000;
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT , () =>{
  console.log('Server is Listening !!');
})