if(sessionStorage.getItem('lang') == "en"){
  console.log("lang is ", sessionStorage.getItem('lang') );
  let transItems = document.querySelectorAll('[data-trans]')
  for(let item of transItems){
    if(item.dataset.trans == 'about'){
      item.textContent = 'about'
    }
    if(item.dataset.trans == 'series'){
      item.textContent = 'series'
    }
  }
  switchNavLang()
}

function switchNavLang(){
  const navUrls =
  `
    <a href="lookout-en.html">Look out</a>
    <a href="en/salviadivinorum.html">Salvia Divinorum</a>
    <a href="en/laniakea.html">Laniakea</a>
    <a href="en/mark.html">Mark</a>
    <a href="en/distortion.html">Distortion</a>
  `
  const nav = document.querySelector('nav div')
  nav.innerHTML = navUrls;
}