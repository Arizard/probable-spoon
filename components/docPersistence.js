class Api {
	constructor(token) {
		this.token = token;
	}

	endpoints = {
        // root: 'https://scriptengine-f031b.appspot.com',
        root: 'http://localhost:8080',
		documents: '/documents',
		document: '/document'
	};

	getDocumentListURL = () => {
		return `${this.endpoints.root}${this.endpoints.documents}`;
	};

	getDocumentURL = _uuid => {
		return `${this.endpoints.root}${this.endpoints.document}/${_uuid}`;
	};

	createDocumentURL = () => {
		return `${this.endpoints.root}${this.endpoints.document}`;
	};

	getDocumentList = () => {
		const request = async () => {
			const headers = {
				method: 'GET',
				mode: 'cors',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Host: this.endpoints.root,
					Origin: 'http://localhost:3000',
					Authorization: `Bearer ${this.token}`,
					'Cache-Control': 'no-cache'
				}
			};

			console.log(headers);
            const response = await fetch(this.getDocumentListURL(), headers);
			const json = await response.json();
			return json;
		};

		return request();
	};
}

export default Api;
