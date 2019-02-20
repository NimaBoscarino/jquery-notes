
$(() => {
  // jquery, when someone clicks on the cat, do thing

  $('h1').click(function () {
    // console.log(this)
    // console.log($(this))
    // console.log('You have clicked me')

    $(this).css('color', 'red')
  })

  // $('h1').on('click', function () {

  // })

  $('#kitty').click(function () {
    // $('#text').innerHTML('asdasd')
    console.log('hello')
  })
})


