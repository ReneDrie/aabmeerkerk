<script src="./app.js"></script>

<template>
	<div class="site-wrapper">
		<site-header></site-header>
		<section class="content-wrapper">
			<main-navigation></main-navigation>
			<router-view class="content"></router-view>
		</section>
		<site-footer></site-footer>
	</div>
</template>
