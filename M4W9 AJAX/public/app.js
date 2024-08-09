const API_KEY = "3b5c51a03cca3b792e0b9c218f807acd";

const showWeatherData = (weatherData) => {
  $('.results').html(`
    <div class="weather-info">
      <h1>${weatherData.name} </h1>
      <h2>The current weather is ${weatherData.weather[0].main} - ${weatherData.weather[0].description} </h2>
    </div>
  `)
}

$(document).ready(() => {
  // Target an Element
  // Add event listener
  // Effect - Changing the HTML in some way. In a CRUD

  // $('.box-one').click(() => {
  //   // $('.box-two').css('background-color', 'blue')
  //   $('.box-three').removeClass('pink')
  // })

  // $('.box-two').hover(() => {
  //   // $('.box-three').css('background-color', 'pink')
  //   $('.box-three').addClass('pink')
  // })

  // $('.box-one').click(() => {
  //   // Append adds to bottom
  //   // $('.results').append("<p> Hey! I'm append </p>")
  //   // // prepend adds to top
  //   // $('.results').prepend("<p> Hey! I'm prepend </p>")
  //   // After Goes under the element
  //   // $('.results').after("<p> Hey! I'm after </p>")
  //   // Before goes on top of the element
  //   // $('.results').before("<p> Hey! I'm before </p>")
  //   const box = `
  //     <div class='box box-one'> 
  //       <h1>Box 1 </h1> 
  //     </div>
  //   ` 
  //   $('.results').append(box)
  // })

  // $('.weather-form').submit((event) => {
  //   event.preventDefault();
  //   const cityName = $('.city-name').val();
  //   $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`).then((data) => {
  //     console.log(data);
  //     showWeatherData(data)
  //   })
  // })

})