import { ApplicationError, INodeType, INodeTypeBaseDescription, VersionedNodeType } from 'n8n-workflow';
import { AllureTestOpsV25 } from './v25/AllureTestOpsV25.node';


export class AllureTestOps implements VersionedNodeType {
	description: INodeTypeBaseDescription = {
			displayName: 'Allure TestOps',
			name: 'allureTestOps',
			icon: { light: 'file:allure_testops.svg', dark: 'file:allure_testops.svg' },
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Interact with Allure TestOps API',
		};
	currentVersion: number = 25;
	nodeVersions: { [key: number]: INodeType; } = {
			25: new AllureTestOpsV25(this.description),
	};

	getLatestVersion(): number {
		const versions = Object.keys(this.nodeVersions).map(Number);
		if (versions.length === 0) {
			throw new ApplicationError('No versions available for this node');
		}
		return Math.max(...versions);
	}
	getNodeType(version?: number): INodeType {
		const requestedVersion = version ?? this.getLatestVersion();

		if (this.nodeVersions[requestedVersion]) {
      return this.nodeVersions[requestedVersion];
    }

		throw new ApplicationError(`Node version ${requestedVersion} not found.`);
	}
}
