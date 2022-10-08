const fetch = require('node-fetch');

const login = async () =>{
const tokenResponse = await fetch('https://dev.stedi.me/login',{
  method: 'POST',
  body:JSON.stringify({
    userName: "hello@gmail.com",
    password:"P@$$word"})
})
};

export {login};