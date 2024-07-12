# M02W05 - Networking with TCP

### To Do

- [ ] Discuss networking and the need for protocols
- [ ] TCP introduction
- [ ] TCP demo

## LAN - Local Area Network

## Basic Internet

- Billions and billions of computers talking to one another
- So our computer will connect to the internet and it will find other servers VIA IP Address

## IP Address

- IP Address uniquely identifies a computer on the network
- IPv4 address 192.168.8.8
  - 256 _ 256 _ 256 \* 256
    4 billions
- IPv6

- Modern computer can do LOTS of different things. Zoom call, play an online game like minecraft, watch youtube videos

## PORTS

PORT 4000 - only for ZOOM calls
PORT 2000 - For playing minecraft
PORT 5000 - watching youtube videos
65 543 different ports

HTTP 80
HTTPS 443
SSH port 22
POSTGRES DB 5432

Dev port 3000 - 9000
Cannot use port < 1000

check port 4000

## TCP

- Tranmission Control Protocol

  - Controls how 2 computers talk / connect
  - Secure
  - That once a message is sent, a message should be receive
  - Three way handshake
    Step one: Computer A Sends a request to Computer B
    Step two: Computer B Agrees to the request
    Step three: Computer A see the accepted request and the connection is made

  Send data via something call "packages" / "Pack"
  If you upload an image to Instagram

  Server => Has information
  Client => Wants information

## Event Driven Programming

```js
// When the server is turned on - Do this
server.listen(6000, () => {
  // So inside of here you can write what you want the server to do when it's turned on
});
```
