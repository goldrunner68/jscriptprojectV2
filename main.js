import * as effet from "./jsFunction/logoAnimation.js";
import * as animation from "./jsFunction/animation.js";
import * as defilement from "./jsFunction/contentRolling.js";
import * as formulaire from "./jsFunction/formulaire.js";
import * as burger from "./jsFunction/burgerMenu.js";

burger.burgerMenu();
formulaire.btnFermer()
//hiddenItem.hiddenItem();//cache les item avant onload;

    animation.animation();//fait apparaitre les items apres onload;

formulaire.formulaire();
effet.logoRotation(".logo");

defilement.contentRolling();
//formulaire.contact();
