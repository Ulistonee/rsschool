document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const burgerMenu = document.getElementById('burgerMenu');
    const links = burgerMenu.querySelectorAll('a');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.add('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            burgerMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
});
