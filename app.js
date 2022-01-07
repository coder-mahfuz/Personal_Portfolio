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



/* contact form popup */
const contact = document.getElementById("contact");
const popup = document.querySelector('.popup');


contact.addEventListener('click', function () {
    popup.classList.add("open-popup")
    popup.classList.remove("popup-hidden")
    console.log("I'm working on");
})
  
/* close popup by clicking outside*/

popup.addEventListener("click", function(event) {
      if (
        !event.target.closest("form")
      ) {
          popup.classList.remove("open-popup")
          popup.classList.add("popup-hidden")
      }
    }
  )
