import axios from 'axios';


async function fetchMainCategoriesProducts() {
	try {
		const fetchCategoriesHome = await axios.get(`https://dummyjson.com/products`);
		return fetchCategoriesHome.data 

	} catch (err) {
		console.log(err);
	}
}


export {
	fetchMainCategoriesProducts
};

	

