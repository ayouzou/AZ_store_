import { Session } from "../../../../types/auth";

const GET_PRODUCTS_BY_STORE_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/products`;

export const getProductsByStore = async (storeId: string, session: Session) => {
  try {
    if (!session.user?.token) throw new Error("No token found");
    const url = `${GET_PRODUCTS_BY_STORE_ENDPOINT}/?storeId=${storeId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.token}`,
      },
    });
    if (!response.ok) throw new Error("Error fetching products by store");
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};
