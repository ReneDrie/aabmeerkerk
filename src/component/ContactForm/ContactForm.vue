<style src="./ContactForm.scss" module lang="scss"></style>
<script src="./ContactForm.js"></script>

<template>
	<form :class="$style.wrapper" @submit.prevent="handleFormSubmit">
		<h3 class="h3">{{data.title}}</h3>
		<fieldset>
			<input type="hidden" name="captcha" v-model.trim="captcha" />
			<label :class="$style.label" for="input-name">Naam:</label>
			<input type="text" id="input-name" name="name" v-model.trim="name" required>

			<label :class="$style.label" for="input-email">Email:</label>
			<input type="email" id="input-email" name="email" v-model.trim="email" required>

			<label :class="$style.label" for="input-message">Bericht:</label>
			<textarea name="message" id="input-message" cols="30" rows="10" v-model.trim="message" required></textarea>

			<button type="submit">Button</button>
		</fieldset>
	</form>
</template>

