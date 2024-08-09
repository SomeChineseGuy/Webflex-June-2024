$(document).ready(() => {
  $('.box-one').click(() => {
    $.get('http://localhost:8001/api/dogs').then((data) => {
      data.forEach((dog) => {
        $('.results').append(`
          <div>
            <h1>${dog.name} - ${dog.id}</h1>
            <h2>${dog.weight}lb</h1>
          </div>
        `)
      })
    })
  });

  $('.dog-form').submit(function(event){
    event.preventDefault();
    const name = $('.dog-name').val();
    const weight = $('.dog-weight').val();
    const breed = $('.dog-breed').val();
    console.log(name, weight, breed);
    const data = $(this).serialize()
    
    // Make a post request to my backend
    if(password !== password2) {
      $('.results').apend('<p>Your passwords do not match</p>')
    } else {
      $.post('http://localhost:8001/dogs', {name, weight, breed}).then(res => {
        res.forEach((dog) => {
          $('.results').append(`
            <div>
              <h1>${dog.name} - ${dog.id}</h1>
              <h2>${dog.weight}lb</h1>
            </div>
          `)
        })
      })
    }

  
  })
})