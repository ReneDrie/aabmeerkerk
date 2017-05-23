import getPageId from '../../util/getPageId';

export default {
	name: 'HomePage',

	computed: {
		pageData() {
			const pageId = getPageId(this.$route);

			return this.$store.state.app.cachedPages
				.find(page => page.id === pageId)
				.data;
		},
	},
};
