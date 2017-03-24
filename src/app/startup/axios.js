import { errorFormatter, responseFormatter } from 'util/axios-formatters';
import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';

/**
 * Setup default post headers according to MediaMonks API spec
 */

export default function initAxios() {
	axios.defaults.headers.post['Content-Type'] = 'application/json';

	axios.interceptors.response.use(
		response => responseFormatter(response),
		error => Promise.reject(errorFormatter(error))
	);

	Vue.use(VueAxios, axios);
}
