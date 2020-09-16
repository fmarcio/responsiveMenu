const btn = document.getElementById('btn');
const linksContainer = document.querySelector('.links-container');

btn.addEventListener('click', () => {
    linksContainer.classList.toggle('active');
})