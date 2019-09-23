// This should actually be called something like "SessionMenu"
import Router from 'next/router';

const LoginInfo = props => (
	<div className="login-info box">
		<span className="menu-label">Session</span>
		<span className="has-text-centered">
			<div style={{ marginBottom: 12, marginTop: 12 }}>
				<p className="greeting">
					<span className="has-text-weight-bold">{props.username}</span>
				</p>
			</div>
			<button
				className="button is-danger is-outlined is-small is-fullwidth is-rounded"
				onClick={() => {
					props.logoutCallback()
					Router.push("/login")
				}}>
				Log Out
			</button>
		</span>
	</div>
);

export default LoginInfo;
