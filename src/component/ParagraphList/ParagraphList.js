export default {
	name: 'ParagraphList',

	props: ['data'],

	computed: {
		isComponent() {
			return this.data && typeof this.data[0] !== 'string';
		},
	},
};
