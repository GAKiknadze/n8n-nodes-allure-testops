import { INodePropertyOptions } from "n8n-workflow";

export const getListOption: INodePropertyOptions = {
	name: 'Get List',
	value: 'getProjectList',
	action: 'Get projects list',
	routing: {
		request: {
			method: 'GET',
			url: '/api/project',
		},
	},
}
