// Client facing scripts here
$(document).ready(() => {
  $('.hamburger').click(() => {
    $('.mobile-button-container').addClass('active')
  })

  $('.x-container').click(() => {
    $('.mobile-button-container').removeClass('active')
  })
}) 