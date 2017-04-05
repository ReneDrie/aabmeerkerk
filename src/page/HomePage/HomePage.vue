<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<section :class="$style.wrapper">
		<component
			v-for="component, index in pageData.components"
			:is="component.name"
			:data="component.data"
			:class="$style.component"
		    key="index"
		></component>
	</section>
</template>

