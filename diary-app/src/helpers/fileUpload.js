export const fileUpload = async (file) => {
	const cloudinaryURL = '	https://api.cloudinary.com/v1_1/dzxujl4yi/upload';

	const formData = new FormData();
	formData.append('upload_preset', 'react-diary');
	formData.append('file', file);

	try {
		const resp = await fetch(cloudinaryURL, {
			method: 'POST',
			body: formData,
		});
		if (resp.ok) {
			const cloudinaryResp = await resp.json();
			return cloudinaryResp.secure_url;
		} else {
			return null;
		}
	} catch (error) {
		throw error;
	}
};
