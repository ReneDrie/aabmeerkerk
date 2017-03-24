export function errorFormatter(error) {
	if (error && error.response.data.error) {
		return { ...error.response.data }
	}

	return error;
}

export function responseFormatter(response) {
	if (response.data.data) {
		return response.data;
	}

	return response.data;
}
