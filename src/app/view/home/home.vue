<script src="./home.js"></script>
<style module lang="scss" src="./home.scss"></style>
<template>
	<section :class="$style.wrapper">
		<component
			v-for="component in pageData.components"
			:is="component.name"
			:data="component.data"
			:class="$style.component"
		></component>
	</section>
</template>
