const sectionOne = document.getElementById('section-one')
const close = document.querySelector('.la-times-circle')
const menuBar = document.querySelector('.la-bars')

menuBar.addEventListener('click', ()=>{
    sectionOne.classList.toggle('display-section-one')
})

close.addEventListener('click', ()=>{
    sectionOne.classList.toggle('display-section-one')
})

