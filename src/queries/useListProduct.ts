import { useQuery } from "@tanstack/react-query";
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

const useListProduct = () =>
  useQuery({
    queryKey: [QueryKeys.LIST_PRODUCT],
    queryFn: () =>
      axios
        .get<ListProductResponse>("https://dummyjson.com/products")
        .then((res) => res.data),
  });

export default useListProduct;
