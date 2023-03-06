const app = require('./app')

const mongoose = require('mongoose')
const BD_HOST = 'mongodb+srv://Slava:5rp1rp1o2i58RmbF@cluster0.wed3t41.mongodb.net/db-contacts?retryWrites=true&w=majority'

 mongoose.set('strictQuery', true)
mongoose.connect(BD_HOST)
  .then(() => app.listen(3000, () => {
  console.log("Database connection successful")
}))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })


