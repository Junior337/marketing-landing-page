/*CONCERTA ESSA PORRA*/
var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var main = document.getElementById('main');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;

    if (showSidebar) {
        navigation.style.marginLeft = '+10vw';
        navigation.style.animationName = 'showSidebar';
        main.style.filter = 'blur(2px)';
    }
    else {
        navigation.style.marginLeft = '+100vw';
        navigation.style.animationName = '';
        main.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
});
