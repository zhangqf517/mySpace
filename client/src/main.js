import _ from 'lodash'
import '../src/assets/css/public.css'

function createDomElement(){
    let dom = document.createElement('div')
    dom.innerHTML = _.join(['aslfja.com','好','asfadg'],' ')
    dom.className = 'box'
    return dom
}

let divDom = createDomElement()

document.body.appendChild(divDom)