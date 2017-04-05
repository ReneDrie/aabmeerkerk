<style src="./MainNavigation.scss" module lang="scss"></style>
<script src="./MainNavigation.js"></script>

<template>
	<nav :class="$style.wrapper">
		<button :class="$style.button" @click="toggle">Navigation</button>
		<span :class="$style.currentPage">{{currentPage}}</span>
		<ul :class="$style.list" v-show="open">
			<li key="index" :class="$style.item" v-for="page in visiblePages">
				<router-link :to="page.slug" :active-class="$style.active">{{page.title}}</router-link>
			</li>
		</ul>
	</nav>
</template>

