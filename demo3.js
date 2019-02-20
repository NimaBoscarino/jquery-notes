$('document').ready(function () {

  $('form').on('submit', function (event) {
    event.preventDefault()
    let formData = $(this).serialize()
    console.log(formData)

  })

})