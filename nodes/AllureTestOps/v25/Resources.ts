import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Account',
				value: 'account',
			},
			{
				name: 'Analitic',
				value: 'analitic',
			},
			{
				name: 'Defect',
				value: 'defect',
			},
			{
				name: 'Environment',
				value: 'environment',
			},
			{
				name: 'Launch',
				value: 'launch',
			},
			{
				name: 'Project',
				value: 'project',
			},
			{
				name: 'Test Case',
				value: 'testCase',
			},
			{
				name: 'Test Result',
				value: 'testResult',
			},
		],
		default: 'project',
	},
];
