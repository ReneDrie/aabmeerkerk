import Promise from 'bluebird';
import initAxios from './axios';
import initPlugins from './plugins';
import initEnvironment from './environment';
import initApp from './app';

export default function startup() {
	return Promise.all([
		initEnvironment(),
		initAxios(),
		initPlugins(),
		initApp(),
	]);
}
