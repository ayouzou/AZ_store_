import { Session } from "../../../../types/auth";

const GET_PRODUCT_STORES_ENDPOINT_BY_ID = `${
  import.meta.env.VITE_API_URL as string
}/products`;

export async function getProductStoreById(
  body: Record<string, any>,
  session: Session
) {
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");
    const productId: string = body.productId;
    const token = session.user.token;
    const url = `${GET_PRODUCT_STORES_ENDPOINT_BY_ID}/${productId}`;
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
    const product: Record<string, string | any>= await response.json();
   
    return { product, error: null };
  } catch (error) {
    return {
      product: null,
      error: "Unable to get Review",
    };
  }
}
