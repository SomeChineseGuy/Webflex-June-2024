## M3W07

## Web Servers 101

- [x] Web Servers (Theory)
- [x] Request <-----> Response
- [x] Node JS Server
- [x] Express JS
- [ ] GET Requests
- [ ] EJS
- [ ] Serverside rendering

### TCP

Computers connecting to servers

Client -------------connection------------------ Server
Client--------------connection established ----------- Server
---------------Message----------------->
<---------------Message-----------------
---------------Message----------------->
---------------Message----------------->
---------------Message----------------->
---------------Message----------------->
---------------Connection broken-----------------

TCP is Event driven

- Connection on, data
- Connection on, message
- Connection on, Client

### HTTP

- TCP is like the highway and HTTP is the cars and trucks on that highway
  -----------connection--------------------
  -----------connection established -----------
  Client -------------- Request -------------> Server
  Client <-------------- Response ------------ Server
  Client -------------disconnects -------------- Server

  HTTP is Request Driven
  If the client makes a request to /about ====> Do this
  If the client makes a request to /user ====> Do this

### HTTP connections

- The way a connection is made is the same as TCP
- localhost:6000
- HTTP Methods/Verb: GET / POST / PUT / PATCH / DELETE
- GET => I want to retrieve a resource - Getting a webpage or Getting data (JSON)
- POST => I want to CRUD something CREATE/READ/UPDATE/DELETE

### JSON

```js
"DATA" {
  "WEATHER": "Sunny",
  "CITY": "Vancouver"
}
```

### Request

ONE THING that NEEDS to be sent is the status code
Status code are usually auto made -- override status codes

## Middlewares

Client Request ---------Middleware----------> Server

Server Response --------Middleware---------> Client

Send over EJS
