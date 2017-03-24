import Vue from 'vue';
import ParagraphList from 'component/paragraph-list/paragraph-list';

export default Vue.component('paragraph', {
	props: ['data'],

	mounted() {},

	components: {
		ParagraphList
	}
});
