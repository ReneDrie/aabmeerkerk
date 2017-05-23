<style src="./Occasions.scss" module lang="scss"></style>
<script src="./Occasions.js"></script>

<template>
	<div>
		<h2>Occasions</h2>

		<h3 v-if="selectedCategory">Category: {{selectedCategory.text}}</h3>

		<ul v-if="!selectedCategory">
			<li v-for="category in categories">
				<SpaLink :data="category"></SpaLink>
			</li>
		</ul>

		<ul v-if="selectedCategory">
			<li v-for="item in selectedCategoryItems">
				<SpaLink :data="item"></SpaLink>
			</li>
		</ul>

		<template v-if="selectedItem">
			<h3>Occasion: {{selectedItem.name}}</h3>

			<template v-if="selectedItem.description">
				<h4>Beschrijving:</h4>
				<p v-html="selectedItem.description"></p>
			</template>

			<template v-if="selectedItem.specs">
				<h4>Specificaties:</h4>
				<dl>
					<template v-for="spec in selectedItem.specs">
						<dt>{{spec.label}}</dt>
						<dd>{{spec.value}}</dd>
					</template>
				</dl>
			</template>

			<h4>Prijs: &euro;{{selectedItem.price}}</h4>
		</template>
	</div>
</template>

