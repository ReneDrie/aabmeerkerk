const defaultCaptchaValue = 'defaultValue';

export default {
	name: 'ContactForm',

	data() {
		return {
			captcha: defaultCaptchaValue,
			name: '',
			email: '',
			message: '',
		};
	},

	props: ['data'],

	methods: {
		handleFormSubmit() {
			if (this.captcha === defaultCaptchaValue) {
				console.log('form submit');
				console.log(this.name, this.email, this.message);
			}
		},
	},
};
