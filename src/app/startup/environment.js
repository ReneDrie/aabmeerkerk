import { ConfigManager } from 'util/configmanager';
import { EnvironmentNames } from '../config/configNames';
import config from '../config/config';

export default function initEnvironment() {
	let environment = EnvironmentNames.PRODUCTION;
	let host = document.location.host;

	if (host.indexOf('mediamonks.local') !== -1) {
		host = 'localhost';
	}

	switch (host.split(':').shift()) {
		case 'localhost':
		case 'mediamonks.dev': {
			environment = EnvironmentNames.LOCAL;
			break;
		}
		default: {
			environment = EnvironmentNames.PRODUCTION;
			break;
		}
	}

	ConfigManager.init(config.config, environment);
}
