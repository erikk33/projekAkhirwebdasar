function openImage(element) {
    var imageSrc = element.getAttribute('src');
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = '<img src="' + imageSrc + '" alt="Popup Image">';
    document.body.appendChild(popup);
    popup.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }
});
