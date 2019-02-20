$(document).ready(() => {

  
  $('body').on('click', function (event) {
    let catX = event.clientX
    let catY = event.clientY
    
    let newCat = $('<img>')
    newCat.attr('src', `https://placekitten.com/${getRandomInt(200)}/${getRandomInt(200)}`)
    newCat.css('position', 'absolute')
    newCat.css('top', catY)
    newCat.css('left', catX)
    
    $('body').append(newCat)
    
  })
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 10;
  }
})