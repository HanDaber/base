import './_App.scss'

import React from 'react'
import ProjectList from '../ProjectList/ProjectList'

export default class App_UI extends React.Component {

	// componentWillMount
	constructor( ...args ){
		super( ...args )
	}

	static defaultProps = {
		autoPlay: false,
		maxLoops: 10,
	}
	static propTypes = {
		autoPlay: React.PropTypes.bool.isRequired,
		maxLoops: React.PropTypes.number.isRequired
	}
	state = {
		loopsRemaining: this.props.maxLoops,
	}

	handleOptionsButtonClick = (e) => {
    	this.setState({ showOptionsModal: true });
	}

	render() {
		return (
			<div className={'app this-is-the-app'} >
				<div className="main-pane">
					<ProjectList />
				</div>
			</div>
		)
	}
}
