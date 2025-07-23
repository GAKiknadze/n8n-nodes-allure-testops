import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Project',
				value: 'project',
			},
			// {
			// 	name: 'Test Case',
			// 	value: 'testCase',
			// },
		],
		default: 'project',
	},
];
