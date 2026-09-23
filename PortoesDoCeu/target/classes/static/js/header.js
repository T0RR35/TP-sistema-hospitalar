const navBtn = document.getElementById('nav-btn');
const sidebar = document.getElementById('sidebar');

navBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});