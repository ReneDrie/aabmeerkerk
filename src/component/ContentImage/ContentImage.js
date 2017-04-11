import { VariableNames } from 'data/enum/configNames';

export default {
	name: 'ContentImage',

	data() {
		return {
			prefix: this.$config.getVariable(VariableNames.VERSIONED_STATIC_ROOT),
		};
	},

	props: ['data'],
};
