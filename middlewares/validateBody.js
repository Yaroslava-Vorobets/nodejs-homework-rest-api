const {HttpError} = require('../helpers')

const validateBody = schema => {
    const fun = (req, res, next) => {
         const {error} = schema.validate(req.body)   
      if(error){
        next(HttpError(400, "missing required name field"));   
        } 
        next()
    }
   return fun 
}


module.exports = validateBody 
