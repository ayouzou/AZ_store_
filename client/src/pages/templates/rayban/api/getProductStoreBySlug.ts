import { Session } from "../../../../types/auth";

const GET_PRODUCT_STORES_ENDPOINT_BY_SLUG = `${
  import.meta.env.VITE_API_URL as string
}/products`;

export async function getProductStoreBySlug(
  body: Record<string, any>,
  // session: Session
) {
  try {
    // if (!session?.user?.token) throw new Error("Unauthorized");
    const productSlug: string = body.productSlug;
    // const token = session.user.token;
    const url = `${GET_PRODUCT_STORES_ENDPOINT_BY_SLUG}/one/${productSlug}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error();
    }
    const product: Record<string, string | any> = await response.json();

    return { product, error: null };
  } catch (error) {
    return {
      product: null,
      error: "Unable to get Review",
    };
  }
}
