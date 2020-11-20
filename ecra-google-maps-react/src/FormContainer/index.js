import React, {Component} from 'react';
// import { Form, Button } from 'semantic-ui-react'

class FormContainer extends Component {
	constructor(props) {
		super();

		this.state = {
			city: '',
		}

	}

	// include function that shows data after searching

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					City:  
					<input 
						type="text" 
						placeholder="City" 
						value={this.props.city}
					/>
				</label> 



			</form> 
		)
	}
}

export default FormContainer;