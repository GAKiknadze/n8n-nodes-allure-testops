import { INodePropertyOptions } from "n8n-workflow";

export const deleteOption: INodePropertyOptions = {
		name: 'Delete Project',
		value: 'deleteProject',
		action: 'Delete project',
		routing: {
			request: {
				method: 'DELETE',
				url: '=/api/project/{{$parameter.projectId}}',
			},
		},
}
