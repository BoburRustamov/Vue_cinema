window.addEventListener('scroll', reveal);
function reveal(){
    var scrollLeft = document.querySelectorAll('.scroll_left-bottom,.scroll_left,.scroll_right,.scroll_middle');
    var windowheight = window.innerHeight;
    var revealpoint = 150;
    for (let i = 0; i < scrollLeft.length; i++) {
        var revealtop = scrollLeft[i].getBoundingClientRect().top;

        if(revealtop < windowheight - revealpoint){
            scrollLeft[i].classList.add('active');
        }else{
            scrollLeft[i].classList.remove('active');
        }
    }
}