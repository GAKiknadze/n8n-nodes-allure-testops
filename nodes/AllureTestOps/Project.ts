import { INodeProperties } from 'n8n-workflow';

export const projectFields: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'project'
				],
				operation: [
					'getProject', 'deleteProject', 'updateProject'
				]
			}
		},
	},
	{
		displayName: 'Project Name',
		name: 'projectName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'project'
				],
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
				resource: [
					'project',
				],
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
				routing: {
					request: {
						body: {
							abbr: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				routing: {
					request: {
						body: {
							description: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Is Favorite',
				name: 'favorite',
				type: 'boolean',
				default: false,
				routing: {
					request: {
						body: {
							favorite: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Is Public',
				name: 'isPublic',
				type: 'boolean',
				default: false,
				routing: {
					request: {
						body: {
							isPublic: '={{ $value }}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsUpdateProject',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
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
				routing: {
					request: {
						body: {
							abbr: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Description',
				name: 'newDesc',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				routing: {
					request: {
						body: {
							description: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Is Favorite',
				name: 'newFavorite',
				type: 'boolean',
				default: false,
				routing: {
					request: {
						body: {
							favorite: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Is Public',
				name: 'newIsPublic',
				type: 'boolean',
				default: false,
				routing: {
					request: {
						body: {
							isPublic: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Project Name',
				name: 'newProjectName',
				type: 'string',
				default: '',
				routing: {
					request: {
						body: {
							'name': '={{ $value }}',
						},
					},
				},
			},
		],
	},
]

export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'project',
				],
			},
		},
		options: [
			{
				name: 'Create Project',
				value: 'createProject',
				action: 'Create project',
				routing: {
					request: {
						method: 'POST',
						url: '/api/project',
						body: {
							name: '={{$parameter.projectName}}',
						},
					},
				},
			},
			{
				name: 'Delete Project',
				value: 'deleteProject',
				action: 'Delete project',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/project/{{$parameter.projectId}}',
					},
				},
			},
			{
				name: 'Get List',
				value: 'getProjectList',
				action: 'Get projects list',
				routing: {
					request: {
						method: 'GET',
						url: '/api/project',
					},
				},
			},
			{
				name: 'Get Project By ID',
				value: 'getProject',
				action: 'Get project by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/project/{{$parameter.projectId}}',
					},
				},
			},
			{
				name: 'Update Project',
				value: 'updateProject',
				action: 'Update project',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/project/{{$parameter.projectId}}',
					},
				},
			},
		],
		default: 'getProjectList',
	},
];
