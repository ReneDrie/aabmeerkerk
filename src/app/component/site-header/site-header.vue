<script src="./site-header.js"></script>
<style module lang="scss" src="./site-header.scss"></style>
<template>
	<header :class="$style.wrapper">
		<h2 :class="$style.logoWrapper">
			<router-link to="home">
				<img :class="$style.logo" src="~src/asset/image/logo.svg" alt="Afterprint Advies Bureau Meerkerk" />
			</router-link>
		</h2>
		<div :class="$style.titleWrapper">
			<h1 :class="$style.title">Afterprint Advies Bureau Meerkerk</h1>
			<p :class="$style.description">Hét adres voor advies over alles wat met afterprint te maken heeft.</p>
		</div>
	</header>
</template>
