export default {
	name: 'SpaLink',

	props: ['data'],

	computed: {
		to() {
			const params = { page: this.data.page };
			if (this.data.sub) params.sub = this.data.sub;
			return {
				name: 'home',
				params,
			};
		},
	},
};
