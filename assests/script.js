openNavigation = () => {
    MobileNav.classList.remove("swipeout")
    MobileNav.classList.add("swipein")
}

closeNav = () => {
    MobileNav.classList.remove("swipein")
    MobileNav.classList.add("swipeout")
}

closeNavDelay = () => {
    setTimeout(() => {
        MobileNav.classList.remove("swipein")
        MobileNav.classList.add("swipeout")
    }, 100);
}

showDes = (id) => {
    para = id+'des'
    console.log(para)
    document.getElementById(para).classList.remove('visually-hidden')
}

hideDes = (id) => {
    para = id+'des'
    console.log(para)
    document.getElementById(para).classList.add('visually-hidden')
}