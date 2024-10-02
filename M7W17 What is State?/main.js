let counter = 1;
const increment = () => {
  $('.counter').text(counter += 1)
}

$(() => {
  $('.increment').click((event) => {
    console.log('fire')
  })
  $('.increment').click(increment)
  
})


const obj = {
  username: 'joe',
  id: 12
}

// const username = obj.username
const {username} = obj

const arr = [1,2]
// const one = arr[0]
// const two = arr[1]
const [one, two] = arr;