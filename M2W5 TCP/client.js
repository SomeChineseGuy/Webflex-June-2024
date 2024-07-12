const net = require('net');

const connection = net.createConnection({
  host: "localhost",
  port: 45888
})

connection.setEncoding('utf-8')

connection.on('data', (data) => {
  console.log(`The server saids: ${data}`)
})

process.stdin.setEncoding('utf-8')

// Lets user type something and it will send to server
process.stdin.on('data', (data) => {
  connection.write(data)
})

