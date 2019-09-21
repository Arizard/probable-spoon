// This should actually be called something like "SessionMenu"
import Link from "next/link";

const LoginInfo = props => (
  <div className="login-info">
    <p className="greeting">
      Welcome, <span className="has-text-weight-bold">{props.username}</span>.
    </p>
    <ul>
      <li>
        <Link href={props.logoutURL}>
          <span className="button is-danger is-outlined is-small">Log Out</span>
        </Link>
      </li>
      <li>
        <Link>
          <span className="button is-outlined is-small">Button</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default LoginInfo;
