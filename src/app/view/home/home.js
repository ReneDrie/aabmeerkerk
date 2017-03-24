import * as moduleNames from 'src/app/store/moduleNames';

export default {
	components: {},

	computed: {
		pageData() {
			return this.$store.state[moduleNames.APP].cachedPages
				.find(page => page.id === this.$route.params.page);
		}
	},

	mounted() {}
};
