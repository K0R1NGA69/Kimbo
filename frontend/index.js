import "core-js/stable"
import "regenerator-runtime/runtime"
import "./assets/css/styles.css"
import validator from "./modules/frontValidator"
import {changeSearchMode} from "./modules/searchMode"
import { library, icon } from "../node_modules/@fortawesome/fontawesome-svg-core"
import { faBook } from '../node_modules/@fortawesome/fontawesome-free/js/all'
import { faGithub } from '../node_modules/@fortawesome/fontawesome-free/js/all'
import { faYoutube} from '../node_modules/@fortawesome/fontawesome-free/js/all'
import { faFacebook} from '../node_modules/@fortawesome/fontawesome-free/js/all'
// ,".searchword",".feedback"

//Modules
validator(".search-box")
changeSearchMode()

// Icons
library.add(faBook)
library.add(faGithub)
library.add(faYoutube)
library.add(faFacebook)

const book = icon({ prefix: 'fa', iconName: 'book' })
const github = icon({ prefix: 'fab', iconName: 'fa-github' })
const youtube  = icon({ prefix: 'fab', iconName: 'fa-youtube' })
const facebook  = icon({ prefix: 'fab', iconName: 'fa-facebook' })



 


