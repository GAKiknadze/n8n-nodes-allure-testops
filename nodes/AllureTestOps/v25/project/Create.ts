import { INodeProperties, INodePropertyOptions } from "n8n-workflow";

export const createFields: INodeProperties[] = [
	{
		displayName: 'Project Name',
		name: 'projectName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: [
					'createProject'
				]
			}
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsCreateProject',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'createProject',
				],
			},
		},
		options: [
			{
				displayName: 'Abbreviation',
				name: 'abbr',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
			},
			{
				displayName: 'Is Favorite',
				name: 'favorite',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Is Public',
				name: 'isPublic',
				type: 'boolean',
				default: false,
			},
		],
	},
]

export const createOption: INodePropertyOptions = {
	name: 'Create Project',
	value: 'createProject',
	action: 'Create project',
	routing: {
		request: {
			method: 'POST',
			url: '/api/project',
			body: {
				name: '={{ $parameter.projectName }}',
				abbr: '={{ $parameter.additionalFieldsCreateProject.abbr }}',
				description: '={{ $parameter.additionalFieldsCreateProject.desc }}',
				favorite: '={{ $parameter.additionalFieldsCreateProject.favorite }}',
				isPublic: '={{ $parameter.additionalFieldsCreateProject.isPublic }}',
			},
		},
	},
}
