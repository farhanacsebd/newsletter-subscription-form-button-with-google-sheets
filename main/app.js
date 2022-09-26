const scriptURL = 'https://script.google.com/macros/s/AKfycbywZd2Dl8eLb8K9QDvuQX9-4cLMjVPP8DVnm1zfSUz7fZw1c6X9DOkLA8FZ_b-RDkYi6Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
