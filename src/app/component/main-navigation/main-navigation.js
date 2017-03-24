import { mapGetters, mapState } from 'vuex';
import * as moduleNames from 'src/app/store/moduleNames';

export default {
	data() {
		return {
			open: false
		}
	},

	mounted() {
		this.$router.beforeEach((to, from, next) => {
			this.open = false;
			next();
		});
	},

	computed: {
		...mapGetters(moduleNames.APP, ['visiblePages']),
		...mapState(moduleNames.APP, ['pages']),
		currentPage() {
			const page = this.$store.state[moduleNames.APP].pages
				.find(p => p.slug === this.$route.params.page);
			return page ? page.title : '';
		}
	},

	methods: {
		toggle() {
			this.open = !this.open;
		}
	},
}
