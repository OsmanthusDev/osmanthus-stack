const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.listen(3000, () => {
  console.log(`app listening on port ${3000}`)
})
