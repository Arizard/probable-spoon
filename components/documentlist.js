import { GoFile } from 'react-icons/go';
import Link from 'next/link';

const DocumentList = props => {
	const componentUserDocuments = props.userDocuments.map(row => (
		<li key={row.name}>
            <div>
                <a>
                    <span className="icon">
                        <GoFile />
                    </span>
                    {row.title}
                </a>
            </div>
        </li>
	));

	return (
		<div className="document-list box">
            <p>
                <span className="has-text-weight-bold">Documents</span>
            </p>
            <ul className="has-text-grey">
                {componentUserDocuments}
            </ul>
		</div>
	);
};

export default DocumentList;
