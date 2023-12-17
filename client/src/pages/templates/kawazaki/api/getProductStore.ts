import { Session } from "../../../../types/auth";

const GET_PRODUCTS_STORES_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/products`;

export async function getProductStore(
  body: Record<string, any>,
  session: Session
) {
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");
    const storeId: string = body.storeId;
    const token = session.user.token;
    const url = `${GET_PRODUCTS_STORES_ENDPOINT}?storeId=${storeId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error();
    }
 
    const products: Record<string, string | any>[] = await response.json();
    return { products, error: null };
  } catch (error) {
    return {
      products: null,
      error: "Unable to get Products",
    };
  }
}
