// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// var lang=urlParams.get('lang');

// const LANG=lang?"NEPALI":"ENGLISH"


const engBtn = document.getElementById('eng').addEventListener("click", () => { changeLang('eng') })
const nepBtn = document.getElementById('nep').addEventListener("click", () => { changeLang('nep') })
// Maintain a supported Language List
var langList = ['eng', 'nep'];
const lang = localStorage.getItem('language')
changeLang(lang || 'eng');

function highlightActiveLangButton(lang) {
  document.querySelectorAll(".lang_button").forEach(el => el.classList.remove("active"))
  // document.getElementById(lang)?.classList.add("active")
  const lang_el = document.getElementById(lang)
  console.log(lang_el)
  if (lang_el)
    lang_el.classList.add("active")

}
// function to change language
function changeLang(lang) {
  highlightActiveLangButton(lang);
  localStorage.setItem('language', lang);
  langList.forEach((langEle) => {
    // if language matches, display
    if (langEle == lang) {
      let elementsWithLang = document.querySelectorAll(`[lang="${lang}"]`);
      // console.log(elementsWithLang)
      elementsWithLang.forEach((elem) => {
        elem.classList.remove("disp_none")
      })
    }
    // hide the language text
    else {
      hideLang(langEle)
    }
  })
}

// function to hide language
function hideLang(lang) {
  let elementsWithLang = document.querySelectorAll(`[lang="${lang}"]`);
  elementsWithLang.forEach((elem) => {
    elem.classList.add("disp_none")
  })
}
