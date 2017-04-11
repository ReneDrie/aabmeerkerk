export default {
	name: 'HomePage',

	computed: {
		pageData() {
			const pageId = [this.$route.params.page];
			if (this.$route.params.sub) pageId.push(this.$route.params.sub);
			return this.$store.state.app.cachedPages
				.find(page => page.id === pageId.join('/'))
				.data;
		},
	},
};
