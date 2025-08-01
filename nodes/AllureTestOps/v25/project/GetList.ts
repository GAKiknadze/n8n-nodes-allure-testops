import { INodeProperties, INodePropertyOptions } from "n8n-workflow";

export const getListFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsGetProjectList',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'getProjectList',
				],
			},
		},
		options: [
			{
				displayName: 'Only My Projects',
				name: 'my',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Only Favorite',
				name: 'favorite',
				type: 'boolean',
				default: false,
			},
		],
	}
]

export const getListOption: INodePropertyOptions = {
	name: 'Get List',
	value: 'getProjectList',
	action: 'Get projects list',
	routing: {
		request: {
			method: 'GET',
			url: '/api/project',
			qs: {
				query: '={{ $parameter.query }}',
				// sort: '={{ JSON.parse($parameter.sort) }}',
				my: '={{ $parameter.additionalFieldsGetProjectList.my }}',
				favorite: '={{ $parameter.additionalFieldsGetProjectList.favorite }}',
				page: '={{ $parameter.page }}',
				size: '={{ $parameter.size }}',
			}
		},
	},
}
