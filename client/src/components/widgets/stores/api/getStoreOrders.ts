import { Session } from "../../../../types/auth";

const GET_STORES_ORDERS_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/orders`;

export async function getStoreOrders(
  body: Record<string, any>,
  session: Session
) {
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");

    const storeId: string = body.storeId;
    const token = session.user.token;
    const url = `${GET_STORES_ORDERS_ENDPOINT}?storeId=${storeId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("this is response from ts",response)
    if (!response.ok) {
      throw new Error();
    }
    const storeOrders: Record<string, string | any>[] = await response.json();
    const headings: Record<string, string> = {
      _id: "order id",
      customer_id: "customer_id",
      product: "product_id",
      quantity: "quantity",
      status: "Status",
      created_at: "created_at",
    };
    return { storeOrders, headings, error: null };
  } catch (error) {
    return {
      storeOrders: null,
      error: "Unable to get Orders",
    };
  }
}
