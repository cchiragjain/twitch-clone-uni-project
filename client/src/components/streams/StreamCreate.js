import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	onSubmit = formValues => {
		this.props.createStream(formValues);
	};

	render() {
		if (!this.props.auth.isSignedIn) {
			return <div>Please Login!!!</div>;
		}
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
	};
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
