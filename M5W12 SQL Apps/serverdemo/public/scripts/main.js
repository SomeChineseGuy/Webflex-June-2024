$(document).ready(() => {
  $('.jquery-fetch').click(() => {
    $.get('/api/users', (res) => {
      for(let item of res) {
        console.log(item);
        $('.user-results').append(`
          <div> 
            <h1>${item.name} - ${item.email}</h1>
            <p>AGE:${item.age} </p>
          </div>
        `)
      }
    })
  })
})