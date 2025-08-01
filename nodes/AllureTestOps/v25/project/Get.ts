import { INodePropertyOptions } from "n8n-workflow";

export const getOption: INodePropertyOptions = {
	name: 'Get Project By ID',
	value: 'getProject',
	action: 'Get project by id',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/project/{{$parameter.projectId}}',
		},
	},
}
