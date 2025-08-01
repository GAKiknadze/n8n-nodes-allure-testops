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
		default: 0,
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
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		default: 0,
		displayOptions: {
			show: {
				operation: [
					'getProjectList',
					'getTestCaseList',
				]
			}
		},
	},
	{
		displayName: 'Size',
		name: 'size',
		type: 'number',
		typeOptions: {
			minValue: 1,
			numberPrecision: 0,
		},
		default: 10,
		displayOptions: {
			show: {
				operation: [
					'getProjectList',
					'getTestCaseList',
				]
			}
		},
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'getProjectList',
				]
			}
		},
	},
	// TO-DO
	// Реализовать сортировку по параметрам сущности
	// {
	// 	displayName: 'Sort',
	// 	name: 'sort',
	// 	type: 'json',
	// 	default: '',
	// 	displayOptions: {
	// 		show: {
	// 			operation: [
	// 				'getProjectList',
	// 			]
	// 		}
	// 	},
	// }
]
