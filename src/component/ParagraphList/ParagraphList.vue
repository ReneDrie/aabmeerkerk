<style src="./ParagraphList.scss" module lang="scss"></style>
<script src="./ParagraphList.js"></script>

<template>
	<ul :class="$style.wrapper">
		<li v-for="item in data">{{item}}</li>
	</ul>
</template>

