import { INodeProperties } from "n8n-workflow";
import { createFields, createOption } from "./Create";
import { deleteOption } from "./Delete";
import { commonFields } from "./Common";
import { getListOption } from "./GetList";
import { getOption } from "./Get";
import { updateFields, updateOption } from "./Update";

export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Project',
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
			createOption,
			deleteOption,
			getListOption,
			getOption,
			updateOption
		],
		default: '',
	},
	...createFields,
	...updateFields,
	...commonFields,
]
