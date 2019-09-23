import React, { Component } from 'react';
import EditorSidebar from '../components/editorsidebar';
import EditorPanel from '../components/editorpanel';
import Api from '../components/docPersistence';
import Router from 'next/router';
import './css/bulma-wrapper.scss';
import './css/editor-layout.scss';

const userDocuments = [
	{
		name: 'Document01',
		title: 'Document01',
		owner: 'Arie',
		data: '(omitted by presenter)',
		uuid: 'fake-uuid-fake-uuid'
	},
	{
		name: 'Document02',
		title: 'Document02',
		owner: 'Arie',
		data: '(omitted by presenter)',
		uuid: 'fake-uuid-fake-uuid'
	},
	{
		name: 'Document03',
		title: 'Document03',
		owner: 'Arie',
		data: '(omitted by presenter)',
		uuid: 'fake-uuid-fake-uuid'
	}
];

class Index extends Component {
	state = {
		userDocumentsRetrieved: false,
		userDocuments: [],
		currentDocument: {},
	};

	openDocument = (_uuid) => {
		this.state.api.getDocument(_uuid).then(obj => {
			this.setState({ currentDocument: obj })
		})
	}

	shouldComponentUpdate = () => {
		console.log("component updated")
		return true
	}

	componentDidMount() {
		var firebase = require('../components/firebaseInit').default;
		this.setState({ firebase });
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				user.getIdToken(/* forceRefresh */ true)
					.then(idToken => {
						const api = new Api(idToken);
						this.setState({
							token: idToken,
							api: api
						});
					})
					.catch(function(error) {
						console.error('Could not get the ID Token.');
						console.error(error);
					});
				this.setState({ user: user, authed: true });
			} else {
				// User is signed out.
				Router.push('/login');
				this.setState({ user: null, authed: false });
			}
		});
	}

	render = () => {
		if (this.state.authed && this.state.api) {
			if (!this.state.userDocumentsRetrieved) {
				this.state.api.getDocumentList().then(json => {
					console.log(json);
					this.setState({
						userDocumentsRetrieved: true,
						userDocuments: json
					});
				});
			}
			console.log(this.state.currentDocument)
			return (
				<div>
					<div className="editor-sidebar-container">
						<EditorSidebar
							username={this.state.user.displayName}
							token={this.state.token}
							logoutCallback={() =>
								this.state.firebase.auth().signOut()
							}
							userDocuments={this.state.userDocuments}
							openDocument={this.openDocument}
						/>
					</div>
					<div className="editor-panel-container">
						<EditorPanel
							token={this.state.token}
							currentDocument={this.state.currentDocument}
						/>
					</div>
				</div>
			);
		}
		return <div></div>;
	}
}

export default Index;
