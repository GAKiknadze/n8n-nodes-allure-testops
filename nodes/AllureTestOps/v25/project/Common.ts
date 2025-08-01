import { INodeProperties } from "n8n-workflow";

export const commonFields: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: [
					'deleteProject',
					'getProject',
					'updateProject',
				]
			}
		},
	},
]
