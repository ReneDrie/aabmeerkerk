export default {
	name: 'SpaLink',

	props: ['data'],

	computed: {
		to() {
			const params = { page: this.data.page };
			if (this.data.sub) params.sub = this.data.sub;
			if (this.data.sub2) params.sub2 = this.data.sub2;

			return {
				name: 'home',
				params,
			};
		},
	},
};
