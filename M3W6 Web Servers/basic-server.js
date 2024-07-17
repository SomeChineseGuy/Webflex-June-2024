const http = require('http');


const normalPage = `
                    <div style="color: red">
                      <h1>This page does not work. Please try the /about or /support </h1>
                    </div>
                    `

const server = http.createServer((request, response) => {
  // Request is something the user is going to request
  // Response is something the server is going to repsonse with

  console.log(request.url);
  console.log("Someone has connected!")
  if(request.url === '/') {
    response.end('<h1>Hello and welcome to my homepage! </h1>')
  } else if(request.url === '/about') {
    response.end('<h1>You are on the about page! </h1>')
  } else if(request.url === '/support') {
    response.end('<h1>You are on the Support page! </h1>')
  } else {
    response.end(
      normalPage
    )
  }
})

server.listen(8000, () => {
  console.log('The Server is on!');
})