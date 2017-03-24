/**
 * Initialize base application styles
 */
import 'src/asset/style/base.scss';

import { sync } from 'vuex-router-sync';
import startup from 'src/app/startup';
import App from 'src/app';
import router from 'src/app/router';
import store from 'src/app/store';
import Vue from 'vue';

// Reusable component global imports
import 'component/paragraph/paragraph';
import 'component/contact-form/contact-form';

/**
 * The debug mode is available globally in the Vue.config.debug property
 */
Vue.config.debug = process.env.debug;

let app = null;

startup()
	.then(() => {
		app = new App({
			store,
			router
		});

		// Sync store and router
		sync(store, router);
	})
	.then(() => app.$mount('[data-app-container]'));
