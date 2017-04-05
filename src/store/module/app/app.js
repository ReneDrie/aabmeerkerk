/* eslint no-param-reassign: ["error", { "props": false }] */
import getPageData from 'api/app';
import appData from 'data/app.json';

export const GET_PAGE = 'getPage';
export const CACHE_PAGE = 'cachePage';

export default {
	namespaced: true,

	state: {
		currentPage: null,
		pages: appData.pages,
		cachedPages: [],
	},

	getters: {
		visiblePages: state => state.pages.filter(page => page.hidden !== true),
	},

	actions: {
		[GET_PAGE]({ commit, state }, pageId) {
			const id = pageId;
			if (typeof id === 'undefined') {
				return Promise.reject('home');
			} else if (!state.pages.find(p => p.slug === id)) {
				return Promise.reject('404');
			}

			const page = state.cachedPages.find(p => p.id === id);

			if (!page) {
				return getPageData(id)
					.then(response => commit(CACHE_PAGE, { ...response, id }));
			}

			return Promise.resolve(page);
		},
	},

	mutations: {
		[CACHE_PAGE](state, response) {
			state.cachedPages.push(response);
		},
	},
};
