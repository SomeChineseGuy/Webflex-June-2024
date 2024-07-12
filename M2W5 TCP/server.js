const net = require('net')

const server = net.createServer();
const PORT = 45888;

// Create a place to store all of our clients
const arrOfUsers = []

// Watch for someone to connect to my server
server.on('connection', (connection) => {
  connection.write("Welcome to my server")
  connection.setEncoding('utf-8');

  arrOfUsers.push(connection);

  // write down how many people have connected
  console.log(`You have ${arrOfUsers.length} connected`);

  connection.on('data', (data) => {
    for(let conn of arrOfUsers) {
      // loop over array
      // check if the current item in the loop 
      // matches the user who sent the message
      // if it does NOT match then send the message to that user
      if(conn !== connection) {
        conn.write(data)
      }
    }
  })

})

// Create a server 
server.listen(PORT, () => {
  // So inside of here you can write what you want the server to do when it's turned on
  console.log(`The server is running on port ${PORT}`);
});