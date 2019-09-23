import { GoFile } from 'react-icons/go';
import Link from 'next/link';

const DocumentList = props => {
	const componentUserDocuments = props.userDocuments.map(row => (
		<li key={row.name}>
			<div>
				<a onClick={() => {props.openDocument(row.uuid)}}>
					{/* <span className="icon">
                        <GoFile />
                    </span> */}
					{row.title}
				</a>
			</div>
		</li>
	));

	return (
		<div className="document-list box menu">
			<span className="menu-label">Documents</span>
			<ul className="menu-list">{componentUserDocuments}</ul>
		</div>
	);
};

export default DocumentList;
