/**
 * Routes
 */
import Home from './view/home/home.vue';

export const routerPaths = {
	home: '/:page?'
};

export default [
	{
		name: 'home',
		path: routerPaths.home,
		component: Home
	}
];
