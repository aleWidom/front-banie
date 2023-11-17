/* import api from "@/lib/api";
import endpoints from "@/config/endpoints.json";

async function fetchMainCategoriesProducts() {
  try {
    const fetchCategoriesHome = await api.get(endpoints.listProducts);

    // A modo ejemplo
    if (fetchCategoriesHome.status !== 200) {
      throw new Error("Get categories product failed");
    }

    return fetchCategoriesHome.data;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
  }
}

export { fetchMainCategoriesProducts };
 */