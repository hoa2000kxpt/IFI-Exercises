// Get the value of pop-up image and close button
const popup = document.querySelector('.pop-up');
const close = document.querySelector('.pop-up-close');
const body = document.querySelector('body');
// Pop-up image will be immediately displayed 
window.onload = function() {
        popup.style.display = "block";
        body.style.overflow = "hidden";
    
}

// The pop-up will be closed when clicking (x) button


// $(function () {
//     $(window).load(function () {
//         $(".pop-up").css("display", "block");
//         $('body').css('overflow', 'hidden');
//     });

//     $(".pop-up-close").click(function () {
//         $(".pop-up").css("display", "none");
//         $('body').css('overflow', 'scroll');
//     });
// });

close.addEventListener('click', () => {
    popup.style.display = "none";
    body.style.overflow = "scroll";
})




