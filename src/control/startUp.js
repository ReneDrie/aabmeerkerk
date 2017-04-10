import Vue from 'vue';
import ConfigPlugin from 'config/ConfigPlugin';

const initPlugins = () => {
	Vue.use(ConfigPlugin);
};

const startUp = () => {
	initPlugins();

	return Promise.all([
		Promise.resolve(),
	]);
};

export default startUp;
