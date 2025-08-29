// jsonwebtoken
const { configDotenv } = require('dotenv');
const jwt = require('jsonwebtoken'); // commonjs
configDotenv()
// import jwt from 'jsonwebtoken'  // moduleJs
// header, payload, sign 

let user = {
    id: 123,
    name: 'juan',
    rol: 'admin'
}

let key = process.env.KEY

console.log(key)

function createToken(user, key){
    try {
        const token = jwt.sign(user,key, {expiresIn: '1h'})
        return token
    } catch(err){
        console.log(err)
    }
}
// express, angular
const token = createToken(user, key)
console.log(token)

function validateToken(token, key){
    try{
        const decode = jwt.verify(token, key)
        return decode

    }catch(err){
        console.log(err);
        res.json({ok: false, msg: 'Hubo un error'})
    }
}
const decode = validateToken(token, key)
// console.log(decode)


// const result = validateToken(token, key)
// console.log(result)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoianVhbiIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzU2NTExMDI3LCJleHAiOjE3NTY1MTQ2Mjd9.DP5RSo2QNILN4LdqgQOF4hMsRXCzhkeSbrrTLrCP-40