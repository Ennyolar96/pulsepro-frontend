export function setDomHiddenUntilFound(dom: HTMLElement): void {
  dom.hidden = true; //"until-found"
}

export function domOnBeforeMatch(dom: HTMLElement, callback: () => void): void {
  dom.onbeforematch = callback;
}
