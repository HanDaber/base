/*! 
	@preserve dh process.env.APP_HASH 
	MAIN UI ENTRY
*/
import './index.html'
import './favicon.ico'
import 'normalize.css/normalize.css'
import './scss/app.scss'

// ==================== BUILD ====================
// import FlashClass from './components/Flash/flash'
// if( ! FlashClass.isRegistered('u-flash') ){
// 	window.Flash = document.registerElement('u-flash', FlashClass )
// }

{
	// function fetchStylesheet(){
	// 	console.log('fetchStylesheet')
	// 	var s = document.getElementsByTagName('script')
	// 	for( var i = 0, l = s.length; i < l; i++ ){ 
	// 		var this_script = s[ i ],
	// 			_script_attrs = this_script.attributes,
	// 			set_src = false,
	// 			the_src = ''
	// 		for( var j = 0, m = _script_attrs.length; j < m; j++ ){
	// 			var this_attr = _script_attrs[ j ]
	// 			if( this_attr.name == 'src'){
	// 				the_src = this_attr.value
	// 			}
	// 			if( this_attr.name == 'data-hash' && this_attr.value == process.env.APP_HASH ){
	// 				console.dir( this_script )
	// 				set_src = true
	// 			}
	// 		}
	// 		if( set_src ){
	// 			var head = document.head, 
	// 				link = document.createElement('link')
	// 			link.type = 'text/css'
	// 			link.rel = 'stylesheet'
	// 			link.href = the_src.replace('.js', '.css').replace('js/', 'css/')
	// 			console.dir( link.href )
	// 			head.appendChild( link )
	// 		}
	// 	}
	// }

	// // DomReady
	// ;(function(){
	//     var DomReady = window.DomReady = {};

	// 	// Everything that has to do with properly supporting our document ready event. Brought over from the most awesome jQuery. 

	//     var userAgent = navigator.userAgent.toLowerCase();

	//     // Figure out what browser is being used
	//     var browser = {
	//     	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
	//     	safari: /webkit/.test(userAgent),
	//     	opera: /opera/.test(userAgent),
	//     	msie: (/msie/.test(userAgent)) && (!/opera/.test( userAgent )),
	//     	mozilla: (/mozilla/.test(userAgent)) && (!/(compatible|webkit)/.test(userAgent))
	//     };    

	// 	var readyBound = false;	
	// 	var isReady = false;
	// 	var readyList = [];

	// 	// Handle when the DOM is ready
	// 	function domReady() {
	// 		// Make sure that the DOM is not already loaded
	// 		if(!isReady) {
	// 			// Remember that the DOM is ready
	// 			isReady = true;
	        
	// 	        if(readyList) {
	// 	            for(var fn = 0; fn < readyList.length; fn++) {
	// 	                readyList[fn].call(window, []);
	// 	            }
	            
	// 	            readyList = [];
	// 	        }
	// 		}
	// 	};

	// 	// From Simon Willison. A safe way to fire onload w/o screwing up everyone else.
	// 	function addLoadEvent(func) {
	// 	  var oldonload = window.onload;
	// 	  if (typeof window.onload != 'function') {
	// 	    window.onload = func;
	// 	  } else {
	// 	    window.onload = function() {
	// 	      if (oldonload) {
	// 	        oldonload();
	// 	      }
	// 	      func();
	// 	    }
	// 	  }
	// 	};

	// 	// does the heavy work of working through the browsers idiosyncracies (let's call them that) to hook onload.
	// 	function bindReady() {
	// 		if(readyBound) {
	// 		    return;
	// 	    }
		
	// 		readyBound = true;

	// 		// Mozilla, Opera (see further below for it) and webkit nightlies currently support this event
	// 		if (document.addEventListener && !browser.opera) {
	// 			// Use the handy event callback
	// 			document.addEventListener("DOMContentLoaded", domReady, false);
	// 		}

	// 		// If IE is used and is not in a frame
	// 		// Continually check to see if the document is ready
	// 		if (browser.msie && window == top) (function fheeck(){
	// 			if (isReady) return;
	// 			try {
	// 				// If IE is used, use the trick by Diego Perini
	// 				// http://javascript.nwbox.com/IEContentLoaded/
	// 				document.documentElement.doScroll("left");
	// 			} catch(error) {
	// 				setTimeout( fheeck, 0 );
	// 				return;
	// 			}
	// 			// and execute any waiting functions
	// 		    domReady();
	// 		})();

	// 		if(browser.opera) {
	// 			document.addEventListener("DOMContentLoaded", function ckuuntana(){
	// 				if (isReady) return;
	// 				for (var i = 0; i < document.styleSheets.length; i++)
	// 					if (document.styleSheets[i].disabled) {
	// 						setTimeout( ckuuntana, 0 );
	// 						return;
	// 					}
	// 				// and execute any waiting functions
	// 	            domReady();
	// 			}, false);
	// 		}

	// 		if(browser.safari) {
	// 		    var numStyles;
	// 			(function bwallzesoids(){
	// 				console.log('bwallzesoids')
	// 				if (isReady) return;
	// 				if (document.readyState != "loaded" && document.readyState != "complete") {
	// 					setTimeout( bwallzesoids, 0 );
	// 					return;
	// 				}
	// 				if (numStyles === undefined) {
	// 	                var links = document.getElementsByTagName("link");
	// 	                for (var i=0; i < links.length; i++) {
	// 	                	if(links[i].getAttribute('rel') == 'stylesheet') {
	// 	                	    numStyles++;
	// 	                	}
	// 	                }
	// 	                var styles = document.getElementsByTagName("style");
	// 	                numStyles += styles.length;
	// 				}
	// 				if (document.styleSheets.length != numStyles) {
	// 					setTimeout( bwallzesoids, 0 );
	// 					return;
	// 				}
				
	// 				// and execute any waiting functions
	// 				domReady();
	// 			})();
	// 		}

	// 		// A fallback to window.onload, that will always work
	// 	    addLoadEvent(domReady);
	// 	};

	// 	// This is the public function that people can use to hook up ready.
	// 	DomReady.ready = function(fn, args) {
	// 		// Attach the listeners
	// 		bindReady();
	    
	// 		// If the DOM is already ready
	// 		if (isReady) {
	// 			// Execute the function immediately
	// 			fn.call(window, []);
	// 	    } else {
	// 			// Add the function to the wait list
	// 	        readyList.push( function() { return fn.call(window, []); } );
	// 	    }
	// 	};
	    
	// 	bindReady();
	// })();

	// window.DomReady.ready( fetchStylesheet )
}


// ==================== PROTO ====================
import sandbox from './sandbox'
