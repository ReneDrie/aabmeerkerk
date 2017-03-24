import Vue from 'vue';
import App from './app.vue';

// exported as self-rendered extended component so:
// - it can be instantiated in bootstrap where new options can be passed
// - the setup is compatible with `vuex-connect` which also exports a Vue.extend component
export default Vue.extend({
	render(h) {
		return h(App)
	}
});
