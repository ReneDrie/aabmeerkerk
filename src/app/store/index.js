/**
 * The application store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import appStore from 'store/app';

// Store modules

Vue.use(Vuex);

const { debug } = process.env;

const plugins = [];

if (debug) {
	plugins.push(createLogger());
}

export default new Vuex.Store({

	/**
	 * Assign the modules to the store
	 */
	modules: {
		appStore
	},

	/**
	 * If strict mode should be enabled
	 */
	strict: debug,

	/**
	 * Plugins used in the store
	 */
	plugins
})
