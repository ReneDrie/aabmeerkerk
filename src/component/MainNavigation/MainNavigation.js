import { mapGetters, mapState } from 'vuex';

export default {
	name: 'MainNavigation',

	data() {
		return {
			open: false,
		};
	},

	mounted() {
		this.$router.beforeEach((to, from, next) => {
			this.open = false;
			next();
		});
	},

	computed: {
		...mapGetters('app', ['visiblePages']),
		...mapState('app', ['pages']),
		currentPage() {
			const page = this.$store.state.app.pages
				.find(p => p.slug === this.$route.params.page);
			return page ? page.title : '';
		},
	},

	methods: {
		toggle() {
			this.open = !this.open;
		},
	},
};
