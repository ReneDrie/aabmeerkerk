import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ConfigPlugin from 'config/ConfigPlugin';

const initPlugins = () => {
	Vue.use(ConfigPlugin);
	Vue.use(VueAxios, axios);
};

const startUp = () => {
	initPlugins();

	return Promise.all([
		Promise.resolve(),
	]);
};

export default startUp;
