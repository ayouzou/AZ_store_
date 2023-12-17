import { Session } from "../../../../types/auth";

const GET_REVIEWS_PRODUCT_ENDPOINT_BY_ID = `${
  import.meta.env.VITE_API_URL as string
}/reviews`;

export async function getReviewsProduct(
  body: Record<string, any>,
  // session: Session
) {
  try {
    // if (!session?.user?.token) throw new Error("Unauthorized");
    const productSlug: string = body.productSlug;
    // const productId: string = "653135f5e0601cc1f9764213";

    // const token = session.user.token;
    const url = `${GET_REVIEWS_PRODUCT_ENDPOINT_BY_ID}/product/${productSlug}`;
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
    const review: Record<string, string | any> = await response.json();

    return { review, error: null };
  } catch (error) {
    return {
      review: null,
      error: "Unable to get Reviews",
    };
  }
}
