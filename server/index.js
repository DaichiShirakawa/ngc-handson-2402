const express = require('express')
const app = express()
const port = 8080

const cors = require("cors");

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})