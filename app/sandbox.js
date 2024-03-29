// import ANDROID_BINDINGS from './modules/android_bindings'
import backend from './modules/backend'
import Controller from './modules/controller'
import Resource from './modules/resource'
import Thing from './modules/thing'
import app from './app'

import jQuery from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import 'document-register-element'

// import UI from './components/App/App'
// ReactDOM.render( <UI />, document.getElementById('app') )

// import $UI from './components/App/app'
// $('#app').append( $UI )
// import $UI from './ui'
// $('#app').append( $UI )



let $ = jQuery

window.React = React
window.ReactDOM = ReactDOM
window.jQuery = $
window.$ = $
window.app = app
window.backend = backend
window.Controller = Controller
window.Resource = Resource
window.Thing = Thing


// ===================== PLAY ZONE ======================:
import RemoteControllerClass from './components/Remote/remote-controller'
window.RemoteController = document.registerElement('remote-controller', RemoteControllerClass )

import RemoteItemClass from './components/Remote/remote'
window.RemoteItem = document.registerElement('remote-item', RemoteItemClass )

import FlashClass from './components/Flash/flash'
window.Flash = document.registerElement('u-flash', FlashClass )

import BaseElement from './components/Base/base'
window.Base = document.registerElement('x-base', BaseElement )

import ProjectionElement from './components/Projection/projection'
window.Projection = document.registerElement('x-projection', ProjectionElement )
window.p = document.createElement('x-projection')

import KeyValElement from './components/KeyVal/keyval'
window.KeyVal = document.registerElement('key-val', KeyValElement )











// let SassCompiler = ( SuperClass ) => class extends SuperClass {
// 	createdCallback(){
// 		console.log('who me?')
// 		this.templateStyle = ''
// 	}

// 	compileStyle( scss ){
// 		sass.compile( scss, result => { console.log( result.text ); this.templateStyle = result.text })
// 	}
// }

// class ProjectionElement extends SassCompiler( BaseElement ){
// 	static scss = '$someVar: 123px; .some-selector { width: $someVar; }'

// 	createdCallback(){
// 		console.log('cool wdwd')
// 		this.compileStyle( ProjectionElement.scss )
// 	}
// }





class CustomDate extends BaseElement {
	static elements = []

	static tick(){
		setInterval(() => {
			console.log('tick')
			CustomDate.elements.forEach(( e ) => {
				e.render()
			})
		}, 1000 )
	}

	static attribute = (() => {
		let _t = new Date(),
			t = _t.getTime()

		return `fartsplatters-${t}`
	})()

	// Fires when an instance of the element is created.
	createdCallback(){
		console.dir( this )

		this.data = {}

		this[ CustomDate.attribute ] = false

		CustomDate.elements.push( this )
	}
    // Fires when an instance was inserted into the document.
    attachedCallback(){
    	this.render()

		this.onclick = () => {
    		console.dir( this )
    	}
    }
    // Fires when an instance was removed from the document.
    detachedCallback(){}
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback( attr, oldVal, newVal ){
    	console.log( attr, oldVal, newVal )
    }

	render(){
		let date = new Date(),
			hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds()
		this.textContent = "Today's date: " + date.toJSON().slice(0,10)+' '+( hour > 12 ? hour - 12 : hour )+':'+min+':'+sec
	}

	set [ CustomDate.attribute ]( val ){
		console.log('setted '+CustomDate.attribute+' to '+val )
		this.setAttribute( CustomDate.attribute, val )
		this.data[ CustomDate.attribute ] = val
	}
	get [ CustomDate.attribute ](){
		console.log('getted '+CustomDate.attribute+'')
		return this.data[ CustomDate.attribute ]
	}

	set stuff( val ){
		console.log('setted stuff to '+val )
		this.data.stuff = val
	}
	get stuff(){
		console.log('getted stuff')
		return this.data.stuff
	}
}
CustomDate.tick()
var DateElem = document.registerElement('date-elem', CustomDate )
window.DateElem = DateElem

// var $templates = $('template')
// var $templates = $('remote-elem')
// window.$templates = $templates

// var controllers = $templates.map(( index, template ) => {
// 	let str_resource = getResourceStringFromTemplate( template ),
// 		endpoint = getIdFromTemplate( template ),
// 		remote = backend( str_resource ),
// 		ret = { remote, resource: str_resource, endpoint }

// 	return ret
// }).toArray()
// window.controllers = controllers

// controllers.forEach( current => {
// 	current.remote.get({ id: false }, items => { // test if resource exists
// 		if( ! items.status ){ 
// 			current.remote.get({"username": current.endpoint }, data => { // test if endpoint/id exists
// 				if( ! data.status ){
// 					doWatWithIt({ name: current.resource+'/'+current.endpoint, data, remote: current.remote })
// 				} else { /* CREATE IT MAUYBE NEE??? */ console.error( data ) }
// 			})
// 		} else { /* create it? maybe */ console.error( items ) }
// 	})
// })

// let resources = []
// var doWatWithIt = data => {
// 	resources.push( data )

// 	console.log('NOICE:')
// 	console.dir( data )
// }
// window.resources = resources


// function getResourceStringFromTemplate( $tpl ){
// 	var $buh = $( $tpl ).filter(function(){
// 	    return $( this ).attr('resource')
// 	}).first()

// 	return $buh.attr('resource')
// }

// function getIdFromTemplate( $tpl ){

//   var $html = $( $( $tpl ).html() )

//   var $buh = $html.filter(function(){
//     return $( this ).attr('resource-id')
//   }).first()

//   return $buh.attr('resource-id') || ''
// }

