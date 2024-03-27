let buttons = document.querySelectorAll('.cat');
for (let but of buttons) {
    but.addEventListener('click', () => {
        console.log('pressed');

        window.location.href = `Pages/books.html?categroy=${but.getAttribute('alt')}`;

    });
}
