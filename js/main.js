const target = document.getElementById("menu");
target.addEventListener('click', () => {
    const target = document.getElementById("menu-nav");
    target.classList.toggle('open');
    const nav = document.getElementById("menu-nav-item");
    nav.classList.toggle('in');
});