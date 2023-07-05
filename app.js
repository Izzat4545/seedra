const sidebar = document.querySelector('.sidebar')
const triggerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.closeBtn')
const body = document.querySelector('body')
const like = document.querySelector('.card_favaurite_icon_passiv')
const dislike = document.querySelector('.card_favaurite_icon_active')
let trigger = false

triggerBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)
like.addEventListener('click', likeProduct)
dislike.addEventListener('click', dislikeProduct)

function openSidebar(){
    sidebar.style.right = '0%'
}
function closeSidebar(){
    sidebar.style.right = '-57%'
}
function likeProduct(){
    like.style.display = 'none'
    dislike.style.display = 'block'
}

function dislikeProduct(){
    like.style.display = 'block'
    dislike.style.display = 'none'
}