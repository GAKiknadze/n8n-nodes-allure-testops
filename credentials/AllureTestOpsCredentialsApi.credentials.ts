import {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AllureTestOpsCredentialsApi implements ICredentialType {
	name = 'allureTestOpsCredentialsApi';
	icon: Icon = { light: 'file:allure_testops.svg', dark: 'file:allure_testops.svg' };
	displayName = 'Allure TestOps Credentials API';
	documentationUrl = 'https://github.com/GAKiknadze/n8n-nodes-allure-testops/docs/credentials.md';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'https://sandbox.testops.cloud',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',},
		}
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.domain}}',
			url: '/api/project',
		},
	};
}
