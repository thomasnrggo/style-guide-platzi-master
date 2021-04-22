const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
        document.body.classList.toggle("light-theme");
    }
} else {
    if(prefersDarkScheme.matches) {
        document.body.classList.toggle('dark-theme')
        let theme = 'dark'
        localStorage.setItem("theme", theme);
    } else {
        document.body.classList.toggle('light-theme')
        let theme = 'light'
        localStorage.setItem("theme", theme);
    }
}

btn.addEventListener('click', () => {
    if(document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        var theme = 'light';
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        var theme = 'dark';
    }
    console.log(theme, currentTheme);
    localStorage.setItem("theme", theme);
})