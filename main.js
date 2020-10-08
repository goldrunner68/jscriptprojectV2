import * as cacherItem from "./componement/cacherItem.js";
import * as animation from "./componement/animation.js";
//import * as formulaire from "./componement/formulaire.js";
//import * as defilement from "./componement/defilement.js";

import * as burger from "./componement/slideBurger.js";

cacherItem.cacherItem();//cache les item avant onload;

animation.animation();//fait apparaitre les items apres onload;
 burger.slideBurger();

//defilement.defilement();
//formulaire.contact();
