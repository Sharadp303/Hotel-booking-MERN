const {login, signUp } = require("../controller/auth")

module.exports=function(app){
    app.post('/api/auth/signup',signUp)
    app.post('/api/auth/login',login)
}