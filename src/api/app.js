import Vue from 'vue';
import configManager from 'config/configManagerInstance';
import { URLNames } from 'data/enum/configNames';

export default function getPageData(page) {
	return Vue.axios.get(`${configManager.getURL(URLNames.PAGE_PREFIX) + page}.json`)
		.then(response => response)
		.catch(response => new Error(response));
}
