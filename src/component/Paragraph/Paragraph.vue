<style src="./Paragraph.scss" module lang="scss"></style>
<script src="./Paragraph.js"></script>

<template>
	<section :class="$style.wrapper">
		<h1 class="h1" v-if="data.h1">{{data.h1}}</h1>
		<h2 v-if="data.h2">{{data.h2}}</h2>
		<h3 v-if="data.h3">{{data.h3}}</h3>

		<div v-if="data.copy" v-html="data.copy"></div>
	</section>
</template>
