myWebApp.directive("popUp", function (cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/popUp.html',
        replace: true,
        link: function ($scope, element, attribute) {
            cssInjector.add("/view/Homepage/popUp.css");
            // Get the value of pop-up image and close button
            const popup = document.querySelector('.pop-up');
            const close = document.querySelector('.pop-up-close');
            const body = document.querySelector('body');
            // Pop-up image will be immediately displayed 
            window.onload = function () {
                popup.style.display = "block";
                body.style.overflow = "hidden";
            }

            close.addEventListener('click', () => {
                popup.style.display = "none";
                body.style.overflow = "scroll";
            })

            window.addEventListener('click', () => {
                popup.style.display = "none";
                body.style.overflow = "scroll";
            })
        }

    }
});