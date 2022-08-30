///////
///////Made by Nelzion Yosia
//////
const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Wait Some Minutes To See Your RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Nelzion Yosia RPC IS READY")});
}
module.exports = keepAlive

///////
///////Made by Nelzion Yosia
//////