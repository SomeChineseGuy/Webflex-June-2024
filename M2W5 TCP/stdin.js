process.stdin.setEncoding('utf-8')

process.stdin.on('data', (data) => {
  console.log(data)
})