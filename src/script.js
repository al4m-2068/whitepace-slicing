const toggle = document.getElementById('toggle-menu')
const navpanel = document.getElementById('navigation-panel')
const navbar = document.getElementById('navigation-bar')
const x = document.getElementById('close')
const menu = document.getElementById('menu-bars')
const themeToggle = document.getElementById('theme-toggle')
const toggleCircle = document.getElementById('toggle-circle')

window.addEventListener('load', () => {
    if (document.documentElement.classList.contains('dark')) {
        toggleCircle.classList.remove('left-0')
        toggleCircle.classList.add('right-0')
    } else {
        toggleCircle.classList.remove('right-0')
        toggleCircle.classList.add('left-0')
    }
})

themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        toggleCircle.classList.remove('left-0')
        toggleCircle.classList.add('right-0')
    } else {
        toggleCircle.classList.remove('right-0')
        toggleCircle.classList.add('left-0')
    }
})

toggle.addEventListener('click', () => {
    if (navpanel.classList.contains('-translate-x-full')) {
        navpanel.classList.remove('-translate-x-full')
        menu.classList.add('hidden')
        x.classList.remove('hidden')
    } else {
        navpanel.classList.add('-translate-x-full')
        menu.classList.remove('hidden')
        x.classList.add('hidden')
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-wssky/80')
        navbar.classList.add('dark:bg-wsdark/80')
    } else {
        navbar.classList.remove('bg-wssky/80')
        navbar.classList.remove('dark:bg-wsdark/80')
    }
})