import {
	IAuthenticateGeneric,
	Icon,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IDataObject,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class AllureTestOpsApi implements ICredentialType {
	name = 'allureTestOpsApi';
	icon: Icon = { light: 'file:allure_testops.svg', dark: 'file:allure_testops.svg' };
	displayName = 'Allure TestOps API';
	documentationUrl = 'https://github.com/GAKiknadze/n8n-nodes-allure-testops/blob/master/docs/credentials.md';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
		{
			displayName: 'JWT Token',
			name: 'jwtToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
			},
			default: ''
		},
		{
			displayName: 'Server',
			name: 'server',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'https://sandbox.testops.cloud',
		},
	];
	preAuthentication = async function(
			this: IHttpRequestHelper,
			credentials: ICredentialDataDecryptedObject
	): Promise<IDataObject> {
		try {
				const serverUrl = credentials.server as string;
				const apiToken = credentials.apiToken as string;

				const response = await this.helpers.httpRequest({
						method: 'POST',
						url: `${serverUrl}/api/uaa/oauth/token`,
						headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								'Accept': 'application/json'
						},
						body: {
								grant_type: 'apitoken',
								scope: 'openid',
								token: apiToken
						}
				});

				const jwtResponse = typeof response === 'string' ? JSON.parse(response) : response;

				return {
						jwtToken: jwtResponse.access_token
				};
		} catch (error) {
				throw new Error(`Failed to generate JWT token: ${error.message}`);
		}
	};
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.jwtToken}}',},
		}
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.server}}',
			url: '/api/account/me',
		},
	};
}
