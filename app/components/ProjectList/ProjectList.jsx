import React from 'react'
import app from '../../app'

const MODULE = app.things

class ProjectList extends React.Component {

	constructor( ...args ){
		super( ...args )
		this.state = {
			data: MODULE
		}
	}

	componentDidMount(){
		MODULE.addListener('change', evt => {
			this.onChange( evt )
		})
	}

	componentWillUnmount(){
		MODULE.removeListener('change', evt => {
			this.onChange( evt )
		})
	}

	onChange( evt ){
		let app = this.state.data,
			style = 'color: orange'

		let print = string => console.log('%c'+string, style )

		print('%cApp_UI change', style )
		print('this')
		console.dir( this )
		print('event')
		console.dir( evt )

		this.setState({ data: evt.new_val })
	}

	render(){
		let _thing = this.state.data,
			_data = _thing,//.get('data') || [],
			headers = [ 'A', 'B', 'C' ],
			stuff = []

		// window.thing = _thing

		let header_row = []
		headers.forEach(( name, name_index ) => {
			header_row.push(<th key={ name_index }>{ name }</th>)
		})
		let $header_row = <thead><tr>{ header_row }</tr></thead>

		let table_body = []
		_data.forEach(( row, row_index ) => {
			let this_row = []
			console.dir( row )
			console.dir( row.butt )
			console.dir( row['butt'] )
			headers.forEach(( name, name_index ) => {
				this_row.push(<td key={ name_index }>{ row['butt'] }</td>)
			})
			let $this_row = <tr key={ row_index }>{ this_row }</tr>
			table_body.push( $this_row )
		})
		let $table_body = <tbody>{ table_body }</tbody>

		let $table = <table id="react-results">{ $header_row }{ $table_body }</table>

		return (
			<div className={ _thing.id } >
				{ $table }
			</div>
		)
	}
}


export default ProjectList
