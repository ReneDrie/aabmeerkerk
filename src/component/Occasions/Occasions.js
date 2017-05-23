export default {
	name: 'Occasions',

	props: ['data'],

	computed: {
		parsedItems() {
			return this.data.items.map(item => ({
				...item,
				slug: this.slugify(item.name),
				categorySlug: this.slugify(item.category),
			}));
		},
		categories() {
			const titles = Array.from(new Set(this.parsedItems.map(item => item.category)));
			return titles.map(title => ({
				text: title,
				page: this.$route.params.page,
				sub: this.slugify(title),
			}));
		},
		selectedCategory() {
			return this.categories.find(category => category.sub === this.$route.params.sub);
		},
		selectedCategoryItems() {
			if (this.selectedCategory) {
				return this.parsedItems.filter(item => item.categorySlug === this.selectedCategory.sub)
					.map(item => ({
						text: item.name,
						page: this.$route.params.page,
						sub: item.categorySlug,
						sub2: item.slug,
					}));
			}
			return null;
		},
		selectedItem() {
			if (!this.$route.params.sub2) return null;

			return this.parsedItems.find(item => item.slug === this.$route.params.sub2);
		},
	},

	methods: {
		slugify(value) {
			return value.toLowerCase().replace(' ', '-');
		},
	},
};
