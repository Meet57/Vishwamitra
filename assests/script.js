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