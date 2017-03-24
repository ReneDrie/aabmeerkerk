import Vue from 'vue';
import { ConfigManager } from 'util/configmanager';
import { URLNames } from 'config/configNames';

export function getPageData(page) {
	return Vue.axios.get(`${ConfigManager.getURL(URLNames.PAGE_PREFIX) + page}.json`)
		.then(response => response)
		.catch(response => new Error(response));
}
