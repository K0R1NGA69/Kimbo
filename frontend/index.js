import "core-js/stable"
import "regenerator-runtime/runtime"
import "./assets/css/styles.css"
import validator from "./modules/frontValidator"
import loading from "./modules/loader"
import {changeSearchLangue} from "./modules/searchLangue"



//Modules
// loading("preloader")
validator(".search-form")
changeSearchLangue()

//============= Font awesome Icons==================
library.add(faBook)
library.add(faGithub)
library.add(faYoutube)
library.add(faFacebook)





 


