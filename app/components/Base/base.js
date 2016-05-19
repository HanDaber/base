import 'document-register-element'
import getHTML from './base.jade'
import style from '!raw!sass!./base.scss'

// shim for safari:
if( typeof HTMLDivElement !== 'function'){
    var _HTMLDivElement = function(){}
    _HTMLDivElement.prototype = HTMLDivElement.prototype
    HTMLDivElement = _HTMLDivElement
}

class BaseElement extends HTMLDivElement {

	static isRegistered = name => document.createElement( name ).constructor !== HTMLDivElement // check if this element is registered with the document

	constructor(){ super() }
	// Fires when an instance of the element is created.
	createdCallback(){
		let tpl_vars = { html: this.innerHTML, css: this.getCSS() }
		
		this.baseHTML = this.getHTML( tpl_vars )
	}
    // Fires when an instance was inserted into the document.
    attachedCallback(){ 
    	this.render() 
	}
    // Fires when an instance was removed from the document.
    detachedCallback(){}
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback( attr, oldVal, newVal ){ 
    	this.render() 
	}

    render(){
		let wrapper = this.baseDOM

		this.innerHTML = ''

		if( typeof this.willRender === 'function') this.willRender( wrapper )

		this.appendChild( wrapper )

		if( typeof this.didRender === 'function') this.didRender( wrapper )
    }

	getBaseDOM( html ){
		let wrapper = document.createDocumentFragment(),
			div = document.createElement('div')

		div.innerHTML = html

		let ch = div.childNodes

		Array.from( ch ).forEach( node => {
			if( node ) wrapper.appendChild( node )
		})

		return wrapper
	}

	set baseDOM( val ){
		return false
	}
	get baseDOM(){
		return this.getBaseDOM( this.baseHTML )
	}

	getHTML( tpl_vars ){
		return getHTML( tpl_vars )
	}

	getCSS(){
		return style
	}

	isRegistered(){
		return BaseElement.isRegistered( this.constructor.name )
	}
}

export default BaseElement
