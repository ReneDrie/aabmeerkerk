import Vue from 'vue';

export default Vue.component('contact-form', {
	props: ['data'],

	mounted() {},

	components: {},

	methods: {
		handleFormSubmit() {
			console.log('form submit');
		}
	}
});
