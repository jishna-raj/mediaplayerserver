// import json-server

const jsonServer = require('json-server')

// create json-server using create method - create()

const mediaPlayerServer = jsonServer.create()

//create path for the json file(data) - router()

const router = jsonServer.router('db.json')

//create middleware to parse json - defaults()

const middleware = jsonServer.defaults()



//5) allow server to use router and middleware - use()

mediaPlayerServer.use(middleware)

mediaPlayerServer.use(router)

//6) set up port for the server to run

PORT = 3000 || process.env.PORT //process.env.PORT is used to check whether the given port is available or not.

//7) listen to the request

mediaPlayerServer.listen(PORT,()=>{
    console.log(`server is running sucessfully at port number ${PORT}`);
})


