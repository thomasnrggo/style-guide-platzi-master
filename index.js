const btnDark = document.querySelector("#dark-toggle");
const btnLight = document.querySelector("#light-toggle");
const alert1 = document.querySelector('.alert-primary')
const alert2 = document.querySelector('.alert-secundary')
const alert3 = document.querySelector('.alert-accent1')
const alert4 = document.querySelector('.alert-accent2')
const alert5 = document.querySelector('.alert-accent3')
const showAlertButtun = document.querySelector('#showAlert')
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

btnDark.addEventListener('click', () => {
    // if(document.body.classList.contains("dark-theme")) {
    //     document.body.classList.remove("dark-theme");
    //     document.body.classList.add("light-theme");
    //     var theme = 'light';
    // } else {
    //     document.body.classList.remove("light-theme");
    //     document.body.classList.add("dark-theme");
    //     var theme = 'dark';
    // }
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    var theme = 'dark';
    localStorage.setItem("theme", theme);
})

btnLight.addEventListener('click', () => {
    // if(document.body.classList.contains("dark-theme")) {
    //     document.body.classList.remove("dark-theme");
    //     document.body.classList.add("light-theme");
    //     var theme = 'light';
    // } else {
    //     document.body.classList.remove("light-theme");
    //     document.body.classList.add("dark-theme");
    //     var theme = 'dark';
    // }
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    var theme = 'light';
    console.log(theme, currentTheme);
    localStorage.setItem("theme", theme);
})

alert1.addEventListener('click', () => {
    alert1.classList.add('fadeOutRight')
})
alert1.addEventListener('webkitAnimationEnd', () => {
    alert1.classList.add('d-none')
    alert1.classList.remove('fadeOutRight')

})
alert2.addEventListener('click', () => {
    alert2.classList.add('fadeOutRight')
})
alert2.addEventListener('webkitAnimationEnd', () => {
    alert2.classList.add('d-none')
    alert2.classList.remove('fadeOutRight')
})
alert3.addEventListener('click', () => {
    alert3.classList.add('fadeOutRight')
})
alert3.addEventListener('webkitAnimationEnd', () => {
    alert3.classList.add('d-none')
    alert3.classList.remove('fadeOutRight')
})
alert4.addEventListener('click', () => {
    alert4.classList.add('fadeOutRight')
})
alert4.addEventListener('webkitAnimationEnd', () => {
    alert4.classList.add('d-none')
    alert4.classList.remove('fadeOutRight')
})
alert5.addEventListener('click', () => {
    alert5.classList.add('fadeOutRight')
})
alert5.addEventListener('webkitAnimationEnd', () => {
    alert5.classList.add('d-none')
    alert5.classList.remove('fadeOutRight')
})

showAlertButtun.addEventListener('click', () => {
    alert1.classList.remove('d-none')
    alert2.classList.remove('d-none')
    alert3.classList.remove('d-none')
    alert4.classList.remove('d-none')
    alert5.classList.remove('d-none')
})
