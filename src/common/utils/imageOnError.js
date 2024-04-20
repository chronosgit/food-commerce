const imageOnError = (e, fallbackImage) => {
	// NOTE: prevent infinite error loop
	e.target.onError = null;

	e.target.src = fallbackImage;
};

export default imageOnError;