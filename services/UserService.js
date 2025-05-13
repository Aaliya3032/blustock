import { httpAxios } from "@/helper/httpHelper";

export async function fetchCategories() {
  const result = await httpAxios
    .get("/api/categories")
    .then((response) => response.data);
  return result;
}
