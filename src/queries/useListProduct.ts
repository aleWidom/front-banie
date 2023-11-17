import axios from "axios";

import endpoints from "@/config/endpoints.json";
import { QueryKeys } from "@/types/QueryKeys";

export interface ListProductResponse {
  products: {
    id: string;
    title: string;
    description: string;
    price: string;
    discountPercentage: string;
    rating: string;
    stock: string;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
}


async function useListProduct () {
	try {
		const allProducts = await axios.get(`https://dummyjson.com/products`);
		return allProducts.data 

	} catch (err) {
		console.log(err);
	}
}

export  {useListProduct};


