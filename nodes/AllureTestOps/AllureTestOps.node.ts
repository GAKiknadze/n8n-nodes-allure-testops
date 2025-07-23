import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { resources } from './Resourses';
import { projectFields, projectOperations } from './Project';


export class AllureTestOps implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Allure TestOps',
		name: 'allureTestOps',
		version: 1,
		group: ['transform'],
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		icon: { light: 'file:allure_testops.svg', dark: 'file:allure_testops.svg' },
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Allure TestOps API',
		defaults: {
			name: 'Allure TestOps',
		},
		credentials: [
			{
				name: 'allureTestOpsCredentialsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.domain}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			...resources,
			// Project
			...projectFields,
			...projectOperations,
			// Test Case
			// Launch
			// Test Result
			// Defect
			// Account and group
			// Environment
			// Dashboard and analytic
		]
	};
}
