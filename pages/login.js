import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './css/bulma-wrapper.scss';
import './css/main.scss';
import { Router } from 'next/router';

class Login extends Component {
	state = {};

	componentDidMount() {
		this.setState({ browser: true });

		var firebase = require('../components/firebaseInit').default;
		this.firebase = firebase;

		// Configure FirebaseUI.
		this.uiConfig = {
			// Popup signin flow rather than redirect flow.
			signInFlow: 'popup',
			// Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
			signInSuccessUrl: '/',
			// We will display Google and Facebook as auth providers.
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
				// firebase.auth.FacebookAuthProvider.PROVIDER_ID
			]
		};

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				Router.push("/")
			}
		});
	}

	render() {
		if (this.state.browser) {
			return (
				<div className="">
					<section className="hero hero-main is-primary is-bold">
						<div className="hero-body container">
							<h1 className="is-size-1 has-text-weight-bold">
								Probable Spoon
							</h1>
							<div id="firebaseui-auth-container">
								<StyledFirebaseAuth
									uiConfig={this.uiConfig}
									firebaseAuth={this.firebase.auth()}
								/>
							</div>
						</div>
					</section>
				</div>
			);
		}
		return <div></div>;
	}
}

export default Login;
