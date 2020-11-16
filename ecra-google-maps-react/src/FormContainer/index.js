import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react'

class FormContainer extends Component {
	constructor(props) {
		super();
		this.state = {

		}
	}

	// include function that shows data after searching

	render() {
		return (
			<Form>
				<Form.Group widths='equal'>
		          <Form.Input fluid label='City' placeholder='City' />
			    </Form.Group> 
			    <Form.Field control={Button}>Submit</Form.Field>
			</Form>
		)
	}
}

export default FormContainer;