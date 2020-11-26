const NavSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    /*Toggle Nav */
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        /*Animate Nav */
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `nav-links-fade 0.5s ease forwards ${index/7+0.5}s`

            }
        })

        //Burger Animation
        burger.classList.toggle('toggle')
    })

}

NavSlide()

var naav = document.getElementById("links")
var nav = document.getElementById('mySidenav')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > naav.offsetTop) {
        nav.classList.add('nav-fixed')
    } else {
        nav.classList.remove('nav-fixed')
    }
})


//text blur

let text = document.querySelector('.text')
let img = document.querySelector('.imgxd')

img.addEventListener('click',()=>{
    img.style.filter = 'blur(0)'
    text.style.filter = 'blur(3px)'
    
})

text.addEventListener('click',()=>{
    img.style.filter = 'blur(3px)'
    text.style.filter = 'blur(0)'

})

let burger = document.querySelector('.burger')

burger.addEventListener('click', ()=>{
    if(nav.className.includes('nav-fixed')){
        nav.classList.remove('nav-fixed')

    }else{

        nav.classList.add('nav-fixed')
    }

})
