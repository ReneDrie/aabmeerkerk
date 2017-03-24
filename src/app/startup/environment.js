import { ConfigManager } from 'util/configmanager';
import config from '../config/config';

export default function initEnvironment() {
	ConfigManager.init(config.config, process.env.NODE_ENV);
}
