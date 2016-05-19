import RemoteItemClass from './remote'
import jQuery from 'jquery'

let $ = jQuery

import getHTML from './remote-controller.jade'

let prettyJSON = data => JSON.stringify( data, null, 4 )

// if( ! RemoteItemClass.isRegistered('remote-item') ){
	// var RemoteItem = document.registerElement('remote-item', RemoteItemClass )
// }

class RemoteControllerClass extends RemoteItemClass {
	constructor(){ super() }

	// static getHTML = getHTML

    render( data ){
		var tpl_vars,
			$el;
		if( data ){
			tpl_vars = { title: this.remote.endpoint }

			this.template = this.buildTemplate( tpl_vars )
			$el = $( this.template )
				
			let items = data.map( item => {
				let str = JSON.stringify( item ),
					$tmp = $('<x-projection data='+str+'></x-projection>')
				// let $tmp = $(`<remote-item resource="${ this.remote.endpoint }" id="${ item.id }" actions="*"><em>"${ item.id }"</em></remote-item>`)
				$tmp.on('action', evt => { console.log('action'); console.dir( evt ) })
				return $tmp
			})
			$el.find('.body').html( items )
		} else {
			tpl_vars = { title: this.remote.endpoint, body: this.innerHTML }

			this.template = this.buildTemplate( tpl_vars )
			$el = $( this.template )
		}

		// jQuery.extend( [deep ], target, object1 [, objectN ] )
    	$( this ).html( $el )
    	// this.innerHTML = this.template.html()
    }

	getHTML( ...args ){
		return getHTML( ...args )
	}

    read(){
    	console.dir( this )
    	let remote = this.remote

		// remote.get({ id: false }, items => { // test if resource exists
		// 	console.dir( items )
		// 	if( ! items.status ){
				let handleData = ( data ) => { // test if endpoint/id exists
					console.dir( data )
					if( ! data.status ){
						console.dir( this )
						this.render( data )
					} else {
						let flash = document.createDocumentFragment(),
							err = document.createElement('u-flash')
						err.setAttribute('duration', 10*1000 )
						err.setAttribute('error', true )
						err.innerHTML = prettyJSON( data )
						flash.appendChild( err )
						this.appendChild( flash )
					}
				}
				if( this._id === ''){
					remote.get( handleData )
				}
				else {
					remote.get({ id: this._id }, handleData )
				}
			// } else { console.error( items ) }
		// })
    }

    // create(){}
}


export default RemoteControllerClass