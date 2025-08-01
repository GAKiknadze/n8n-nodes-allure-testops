import { INodeProperties } from "n8n-workflow";

export const commonFields: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: [
					'deleteProject',
					'getProject',
					'updateProject',
					'getTestCaseList',
				]
			}
		},
	},
]
