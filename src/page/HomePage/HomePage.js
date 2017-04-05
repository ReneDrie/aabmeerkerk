export default {
	name: 'HomePage',

	computed: {
		pageData() {
			return this.$store.state.app.cachedPages
				.find(page => page.id === this.$route.params.page)
				.data;
		},
	},
};
