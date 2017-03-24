/* eslint no-param-reassign: ["error", { "props": false }] */
import { getPageData } from 'api/app';
import appData from 'data/app.json';
import * as type from './mutation-types';

export default {
	namespaced: true,

	state: {
		currentPage: null,
		pages: appData.pages,
		cachedPages: []
	},

	getters: {
		visiblePages: state => state.pages.filter(page => page.hidden !== true)
	},

	actions: {
		[type.GET_PAGE]({ commit, state }, pageId) {
			const id = pageId;
			if (typeof id === 'undefined') {
				return Promise.reject('home');
			} else if (!state.pages.find(p => p.slug === id)) {
				return Promise.reject('404');
			}

			const page = state.cachedPages.find(p => p.id === id);

			if (!page) {
				return getPageData(id)
					.then(response => commit(type.CACHE_PAGE, { ...response, id }));
			}

			return Promise.resolve(page);
		},
	},

	mutations: {
		[type.CACHE_PAGE](state, response) {
			state.cachedPages.push(response);
		},
	}
}
