const app = require('./app')

const mongoose = require('mongoose')
const { BD_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true)
mongoose.connect(BD_HOST)
  .then(() => app.listen(PORT, () => {
  console.log("Database connection successful")
}))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })


// 5rp1rp1o2i58RmbF