import { INodeType, INodeTypeBaseDescription, INodeTypeDescription } from "n8n-workflow";
import { NodeConnectionType } from 'n8n-workflow';
import { resources } from "./Resources";
import { projectOperations } from "./project";
import { testCaseOperations } from "./testCase";
import { commonFields } from "./Common";

export class AllureTestOpsV25 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			displayName: 'Allure TestOps',
			name: 'allureTestOps',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			version: 25,
			inputs: [NodeConnectionType.Main],
			outputs: [NodeConnectionType.Main],
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
				...projectOperations,
				...testCaseOperations,
				...commonFields,
			],
			usableAsTool: true,
		};
	}
}
