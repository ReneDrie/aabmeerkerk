<script src="./main-navigation.js"></script>
<style module lang="scss" src="./main-navigation.scss"></style>
<template>
	<div :class="$style.wrapper">
        <button :class="$style.button" @click="toggle">Navigation</button>
		<span :class="$style.currentPage">{{currentPage}}</span>
		<ul :class="$style.list" v-show="open">
			<li key="index" :class="$style.item" v-for="page in visiblePages">
				<router-link :to="page.slug" :active-class="$style.active">{{page.title}}</router-link>
			</li>
		</ul>
	</div>
</template>
