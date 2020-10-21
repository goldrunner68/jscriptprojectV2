import * as effet from "./componement/effet3d.js";
import * as animation from "./componement/animation.js";
//import * as formulaire from "./componement/formulaire.js";
import * as defilement from "./componement/defilement.js";

import * as burger from "./componement/burgerMenu.js";
burger.burgerMenu();

//cacherItem.cacherItem();//cache les item avant onload;

animation.animation();//fait apparaitre les items apres onload;
effet.effet(".logo");

defilement.defilement();
//formulaire.contact();
