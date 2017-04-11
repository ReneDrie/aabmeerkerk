export default {
	name: 'YoutubeEmbed',

	props: ['data'],

	computed: {
		embedUrl() {
			return `http://www.youtube.com/embed/${this.data.embed}?wmode=transparent&rel=0`;
		},
	},
};
