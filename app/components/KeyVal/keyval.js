import BaseElement from '../Base/base'
import getHTML from './keyval.jade'
import style from '!raw!sass!./keyval.scss'



class KeyValElement extends BaseElement {

    willRender( fragment ){
        let key = this.getAttribute('key'),
            $key = fragment.querySelector('.key'),
            val = this.getAttribute('val'),
            $val = fragment.querySelector('.val')

        window.k = this

        $key.innerHTML = key
        $val.innerHTML = val

        $key.addEventListener('click', evt => { console.log( val ) })
    }

    // override
    getHTML( vars ){
        return getHTML( vars )
    }
    // override
    getCSS(){
        return style
    }
}

export default KeyValElement
