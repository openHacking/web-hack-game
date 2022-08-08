export function language() {
  var lang = navigator.language || navigator.userLanguage;
  lang = lang.substr(0, 2);

  return lang;
}

/**
 * DOM selector
 * @param {String}  selector css selector
 * @param {String}  context  parent DOM
 */
export function $$(selector, context) {
  context = context || document;
  let elements = context.querySelectorAll(selector);

  return elements.length == 1
    ? Array.prototype.slice.call(elements)[0]
    : Array.prototype.slice.call(elements);
}

export function showTip(info) {
  $$(".tip").innerHTML = info;
  $$(".tip").style.opacity = 1;
  setTimeout(() => {
    $$(".tip").style.opacity = 0;
  }, 5000);
}
export function changeLevel(n) {
  $$(".level").innerHTML = n;
}

let currentLevel = 1;

export function toNextLevel() {
  currentLevel++;

  $$("#container").style.opacity = 0;

  setTimeout(() => {
    import("../game/answer").then(()=>{
        $$("#container").style.opacity = 1;
    })
    
  }, 1000);
}
