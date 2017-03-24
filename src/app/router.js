import VueRouter from 'vue-router';
import Vue from 'vue';
import * as type from 'store/app/mutation-types';
import * as moduleNames from 'src/app/store/moduleNames';
import store from './store';
import routes from './routes';

/**
 * Router
 */
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	store.dispatch(`${moduleNames.APP}/${type.GET_PAGE}`, to.params.page)
		.then(() => next())
		.catch(page => next(page));
});

export default router;
