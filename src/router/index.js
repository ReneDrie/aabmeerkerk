import VueRouter from 'vue-router';
import Vue from 'vue';
import { routeParser } from 'vue-i18n-manager';
import configManagerInstance from 'config/configManagerInstance';
import { PropertyNames } from 'data/enum/configNames';
import localeConfig from 'config/localeConfig';
import store from 'store';
import { AppMutationTypes } from 'store/module/app';

import routes from './routes';

Vue.use(VueRouter);

const processedRoutes = localeConfig.localeEnabled && localeConfig.localeRoutingEnabled ?
	routeParser(routes, configManagerInstance.getProperty(PropertyNames.DEFAULT_LOCALE)) : routes.concat({
		path: '*',
		redirect: '/',
	});

const router = new VueRouter({
	mode: 'history',
	routes: processedRoutes,
});

router.beforeEach((to, from, next) => {
	const pageId = [to.params.page];
	if (to.params.sub) pageId.push(to.params.sub);

	store.dispatch(AppMutationTypes.GET_PAGE, pageId.join('/'))
		.then(() => next())
		.catch(page => next(page));
});

export default router;
