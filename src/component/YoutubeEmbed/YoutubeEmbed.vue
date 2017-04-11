<style src="./YoutubeEmbed.scss" module lang="scss"></style>
<script src="./YoutubeEmbed.js"></script>

<template>
	<figure :class="$style.wrapper">
		<div :class="$style.video">
			<iframe :src="embedUrl" width="560" height="315" frameborder="0"></iframe>
		</div>
		<figcaption :class="$style.caption">{{data.caption}}</figcaption>
	</figure>
</template>

