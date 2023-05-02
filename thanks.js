let storedTheme = localStorage.getItem('color-theme');

window.addEventListener("load", () => {
    if (storedTheme) {
        document.body.setAttribute('data-theme', storedTheme);
    }
})