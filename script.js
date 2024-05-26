const hamburgerIcon = document.querySelector('.hamburger')
const headerContent = document.querySelector('.nav')
const crossIcon = document.querySelector('.cross')

hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open')
})
crossIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})