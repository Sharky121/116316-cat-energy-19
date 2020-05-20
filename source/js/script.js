'use strict';

const Nodes = {
  MAIN_NAV: document.querySelector(`.main-nav`),
  NAV_BUTTON_TOGGLE: document.querySelector(`.main-nav__toggle`)
}

const navButtonClickHandler = () => {
  if (Nodes.MAIN_NAV.classList.contains(`main-nav--closed`)) {
    Nodes.MAIN_NAV.classList.remove(`main-nav--closed`);
    Nodes.MAIN_NAV.classList.add(`main-nav--open`);
  } else {
    Nodes.MAIN_NAV.classList.add(`main-nav--closed`);
    Nodes.MAIN_NAV.classList.remove(`main-nav--open`);
  }
}

Nodes.MAIN_NAV.classList.remove(`main-nav--nojs`);

Nodes.NAV_BUTTON_TOGGLE.addEventListener(`click`, navButtonClickHandler);
