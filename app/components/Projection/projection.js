import BaseElement from '../Base/base'
import KeyValElement from '../KeyVal/keyval'
import getHTML from './projection.jade'
import style from '!raw!sass!./projection.scss'




// let SassCompiler = ( SuperClass ) => class extends SuperClass {
//  createdCallback(){
//      console.log('who me?')
//      this.templateStyle = ''
//  }

//  compileStyle( scss ){
//      sass.compile( scss, result => { console.log( result.text ); this.templateStyle = result.text })
//  }
// }

// class ProjectionElement extends SassCompiler( BaseElement ){
class ProjectionElement extends BaseElement {

    static getDataDom( data = {} ){
        let d = document.createDocumentFragment()
        
        var data = data

        let type = typeof data
        console.log('Data:')
        if( type == 'string' || type == 'number') console.log( data )
        else console.dir( data )
        console.log( type )

        try { data = JSON.parse( data ) } catch( e ){ console.log('%c Oops, '+e, 'color: orange;') }

        type = typeof data
        console.log( type )

        let listItem = ( data, i ) => {
            let label = document.createElement('span'),
                item = document.createElement('li'),
                proj = ProjectionElement.getDataDom( data[ i ] )

            label.innerHTML = i

            item.appendChild( label )
            item.appendChild( proj )

            // container.innerHTML = i 
            // container.appendChild( item )

            return item
            // item.innerHTML = data[ i ]
        }

        var s;
        if( type == 'string' || type == 'number'){
            s = document.createElement('span')
            s.innerHTML = data
        }
        else if( type == 'function'){
            s = document.createElement('pre')
            s.innerHTML = JSON.stringify( data, null, 2 )
        }
        else if( type == 'object'){
            if( Array.isArray( data ) ){
                s = document.createElement('ol')
                for( var i = 0, l = data.length; i < l; i++ ){
                    let item = listItem( data, i )
                    // let item = document.createElement('li')
                    // item.innerHTML = data[ i ]
                    s.appendChild( item )
                }
            } 
            else {
                s = document.createElement('ul')
                for( var i in data ){
                    let item = listItem( data, i )
                    // let item = document.createElement('li')
                    // item.innerHTML = data[ i ]
                    s.appendChild( item )
                }
            }
        }

        d.appendChild( s )

        return d
    }

    willRender(){
        let data = this.getAttribute('data') // Expecting JSON dada
        console.log( data )

        let d = ProjectionElement.getDataDom( data )

        // let pre = document.createElement('pre')
        // pre.innerHTML = JSON.stringify( data, null, 2 )
        // this.appendChild( pre )
        this.appendChild( d )
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

export default ProjectionElement
