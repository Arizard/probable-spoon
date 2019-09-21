// This should actually be called something like "SessionMenu"
import Link from 'next/link';

const LoginInfo = props => (
	<div className="login-info box">
		<div style={{marginBottom: 12}}>
			<p className="greeting">
				<span className="has-text-weight-bold">{props.username}</span>
			</p>
		</div>
		<Link href={props.logoutURL}>
			<span className="button is-danger is-outlined is-small is-fullwidth is-rounded">
				Log Out
			</span>
		</Link>
	</div>
);

export default LoginInfo;
