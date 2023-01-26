import axios from 'axios';

axios.interceptors.request.use(
	function (config) {
		const { origin } = new URL(config.url);

		const allowedOrigins = ['http://localhost:4000'];
		const token = localStorage.getItem('access-token');

		if (allowedOrigins.includes(origin)) {
			config.headers.authorization = token;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

export const fetchRss = async(id) => {
    const {data} = await axios.get(`http://localhost:4000/${id}`);
    return data;
}

export const deleteRss = async (rss_id) => {
	const { data } = await axios.delete(
		`http://localhost:4000/${rss_id}`
	);

	return data;
};

export const updateRss = async (input, rss_id) => {
	const { data } = await axios.put(
		`http://localhost:4000/product/${rss_id}`,
		input
	);
	return data;
};