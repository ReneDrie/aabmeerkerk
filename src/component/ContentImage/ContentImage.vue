<style src="./ContentImage.scss" module lang="scss"></style>
<script src="./ContentImage.js"></script>

<template>
	<figure :class="$style.wrapper">
		<img v-for="image in data.image" :src="prefix + image.url" />
		<figcaption :class="$style.caption" v-if="data.caption">{{data.caption}}</figcaption>
	</figure>
</template>

