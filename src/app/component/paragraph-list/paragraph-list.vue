<script src="./paragraph-list.js"></script>
<style module lang="scss" src="./paragraph-list.scss"></style>
<template>
	<ul :class="$style.wrapper">
		<li v-for="item in data">{{item}}</li>
	</ul>
</template>
