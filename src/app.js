import menu from './js/menu.json'
import menuTpl from './templates/menutpl.hbs'
import Theme from './js/theme'
import refs from './js/refs'

const {menuEl, checkEl, body} = refs

function initThemePage(){
  let themePage = Theme[localStorage.getItem('theme')]
  if (themePage) {
    body.classList.add(Theme[localStorage.getItem('theme')])
    if (localStorage.getItem('theme') == 'LIGHT') {
      checkEl.checked = false
    } else {
      checkEl.checked = true
    }
  } else {
    body.classList.add(Theme[0])
    localStorage.setItem('theme', Theme[0])
  }
}

function createListItems(){
  const menuMarkup = menu.map((el) => menuTpl(el)).join('')
  menuEl.innerHTML = menuMarkup
}

function setTheme() {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme')
    localStorage.setItem('theme', 'DARK')
  } else {
    body.classList.replace('dark-theme', 'light-theme')
    localStorage.setItem('theme', 'LIGHT')
  }
}

initThemePage()
createListItems()
checkEl.addEventListener('change', setTheme)