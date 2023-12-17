import { Session } from "../../../../types/auth";

const GET_STORES_PRODUCTS_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/products`;

export async function getStoreProducts(
  body: Record<string, any>,
  session: Session
) {
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");
    const storeId: string = body.storeId;
    const token = session.user.token;
    const url = `${GET_STORES_PRODUCTS_ENDPOINT}?storeId=${storeId}`;
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
    const headings: Record<string, string> = {
      product_name: "Name",
      description: "Description",
      price: "Price",
      availability_status: "Status",
      creation_date: "creation_date",
    };
    const products: Record<string, string | any>[] = await response.json();
    return { products, headings, error: null };
  } catch (error) {
    return {
      products: null,
      error: "Unable to get stores",
    };
  }
}
