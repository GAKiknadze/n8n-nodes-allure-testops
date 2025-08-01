import { INodeProperties, INodePropertyOptions } from "n8n-workflow";

export const updateFields: INodeProperties[] = [
{
	displayName: 'Additional Fields',
	name: 'additionalFieldsUpdateProject',
	type: 'collection',
	default: {},
	placeholder: 'Add Field',
	displayOptions: {
		show: {
			operation: [
				'updateProject'
			],
		},
	},
	options: [
		{
			displayName: 'Abbreviation',
			name: 'newAbbr',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Description',
			name: 'newDesc',
			type: 'string',
			default: '',
			typeOptions: {
				rows: 4,
			},
		},
		{
			displayName: 'Is Favorite',
			name: 'newFavorite',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'Is Public',
			name: 'newIsPublic',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'Project Name',
			name: 'projectName',
			type: 'string',
			default: '',
		},
	],
},
]

export const updateOption: INodePropertyOptions = {
	name: 'Update Project',
	value: 'updateProject',
	action: 'Update project',
	routing: {
		request: {
			method: 'PATCH',
			url: '=/api/project/{{$parameter.projectId}}',
			body: {
				name: '={{ $parameter.additionalFieldsUpdateProject.projectName }}',
				abbr: '={{ $parameter.additionalFieldsUpdateProject.abbr }}',
				description: '={{ $parameter.additionalFieldsUpdateProject.desc }}',
				favorite: '={{ $parameter.additionalFieldsUpdateProject.favorite }}',
				isPublic: '={{ $parameter.additionalFieldsUpdateProject.isPublic }}',
			},
		},
	},
}
