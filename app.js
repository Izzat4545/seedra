const sidebar = document.querySelector('.sidebar')
const triggerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.closeBtn')
const body = document.querySelector('body')
let trigger = false

triggerBtn.addEventListener('click', triggerSidebar)
closeBtn.addEventListener('click', close)

function triggerSidebar(){
    sidebar.style.right = '0%'
}
function close(){
    sidebar.style.right = '-57%'
}