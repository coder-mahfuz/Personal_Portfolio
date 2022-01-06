/** cache the dom */

const themes = document.querySelectorAll('.theme-dot')
const modeHref = document.getElementById('theme-style')

/** save theme preferences */

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}





for (let i = 0; themes.length > i; i++) {
    themes[i].addEventListener('click', function () {
        const mode = this.dataset.mode
        setTheme(mode)
    })
    
}

function setTheme(mode) {
    if (mode == "light") {
    modeHref.href = "style.css"
}
    if (mode == "dark") {
    modeHref.href = "/themes/dark.css"
}
    if (mode == "green") {
    modeHref.href = "/themes/green.css"
}
    if (mode == "purple") {
    modeHref.href = "/themes/purple.css"
    }
    
    localStorage.setItem("theme", mode)
}