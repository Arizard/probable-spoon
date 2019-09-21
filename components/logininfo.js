// This should actually be called something like "SessionMenu"
import Link from "next/link";

const LoginInfo = props => (
  <div>
    <p>Welcome, {props.username}.</p>
    <ul>
      <li>
        <Link href={props.logoutURL}>
          <span className="button is-danger is-small">Log Out</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default LoginInfo;
