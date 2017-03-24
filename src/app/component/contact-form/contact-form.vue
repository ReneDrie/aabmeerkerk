<script src="./contact-form.js"></script>
<style module lang="scss" src="./contact-form.scss"></style>
<template>
	<form :class="$style.wrapper" @submit.prevent="handleFormSubmit">
		<h3 class="h3">{{data.title}}</h3>
		<fieldset>
			<label :class="$style.label" for="input-name">Naam:</label>
			<input type="text" id="input-name" name="name" required>

			<label :class="$style.label" for="input-email">Email:</label>
			<input type="email" id="input-email" name="email" required>

			<label :class="$style.label" for="input-message">Bericht:</label>
			<textarea name="message" id="input-message" cols="30" rows="10" required></textarea>

			<button type="submit">Button</button>
		</fieldset>
	</form>
</template>
