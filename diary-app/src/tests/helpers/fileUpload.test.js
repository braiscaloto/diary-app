import cloudinary from 'cloudinary';
const { fileUpload } = require('../../helpers/fileUpload');

cloudinary.config({
	cloud_name: 'dzxujl4yi',
	api_key: '317111919957392',
	api_secret: 'WT78DgCGvT7Q7vNHI-Jd42XJTMg',
});

describe('Test in fileUpload.js', () => {
	test('should upload a file and return the url', async () => {
		const resp = await fetch(
			'https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg'
		);
		const blob = await resp.blob();

		const file = new File([blob], 'photo.jpg');

		const url = await fileUpload(file);

		expect(typeof url).toBe('string');

		//Borrar la imagen por su ID
		const segments = url.split('/');
		const imgId = segments[segments.length - 1].replace('.jpg', '');

		await cloudinary.v2.api.delete_resources(imgId);
	});
	test('should return an error', async () => {
		const file = new File([], 'photo.png');

		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
});
