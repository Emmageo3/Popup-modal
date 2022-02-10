const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.getElementById('container')

open.addEventListener('click', function(){
    container.classList.add('active')
})

close.addEventListener('click', function(){
    container.classList.remove('active')
})