<style src="./ParagraphList.scss" module lang="scss"></style>
<script src="./ParagraphList.js"></script>

<template>
	<ul :class="$style.wrapper">
		<li v-for="item in data" v-if="isComponent">
			<component :is="item.component" :data="item.data"></component>
		</li>
		<li v-for="item in data" v-if="!isComponent">{{item}}</li>
	</ul>
</template>

