<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
	<div class="site-wrapper">
		<SiteHeader></SiteHeader>
		<section class="content-wrapper">
			<MainNavigation></MainNavigation>
			<router-view class="content"></router-view>
		</section>
		<SiteFooter></SiteFooter>
	</div>
</template>
