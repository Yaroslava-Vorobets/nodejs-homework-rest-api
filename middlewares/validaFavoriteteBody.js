const {HttpError} = require('../helpers')

const validaFavoriteteBody = schema => {
    const fun = (req, res, next) => {
         const {error} = schema.validate(req.body)   
      if(error){
        next(HttpError(400, "missing field favorite"));   
        } 
        next()
    }
   return fun 
}

module.exports = validaFavoriteteBody;