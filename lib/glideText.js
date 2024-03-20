export function glideText(selector) {

  const elem = (selector instanceof HTMLElement) ?
    selector :
    document.querySelector(selector)


  const elems = elem.children


  console.log(elem.childNodes)

}