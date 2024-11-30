document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const burgerMenu = document.getElementById('burgerMenu');
    const headerMenu = document.getElementById('headerMenu');
    const headerLinks = headerMenu.querySelectorAll('li');
    const mobileLinks = burgerMenu.querySelectorAll('li');
    const currentUrl = window.location.href;

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.add('no-scroll');
    });

    headerLinks.forEach((li) => {
        const link = li.querySelector('a');
        console.log(link)
        if (link && currentUrl.includes(link.getAttribute('href'))) {
            li.classList.add('non-interactive');
        }
    });

    mobileLinks.forEach((li) => {
        const link = li.querySelector('a');
        if (link && currentUrl.includes(link.getAttribute('href'))) {
            li.classList.add('non-interactive');
        }
    });

    headerMenu.addEventListener('click', function (event) {
        headerLinks.forEach((li) => {
            li.classList.remove('non-interactive');
        })
        const clickedLi = event.target.closest('li');
        if (clickedLi) {
            clickedLi.classList.add('non-interactive');
        }
    })

    burgerMenu.addEventListener('click', function (event) {
        mobileLinks.forEach((li) => {
            li.classList.remove('non-interactive');
        })
        const clickedLi = event.target.closest('li');
        if (clickedLi) {
            clickedLi.classList.add('non-interactive');
            burger.classList.remove('active');
            burgerMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    })
});
