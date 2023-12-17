import { Session } from "../../../../types/auth";

const GET_STORES_ENDPOINT_BY_ID = `${
  import.meta.env.VITE_API_URL as string
}/stores`;

export async function getStoreInfoById(
  body: Record<string, any>,
  session: Session
) {
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");
    const storeId: string = body.storeId;
    const token = session.user.token;
    const url = `${GET_STORES_ENDPOINT_BY_ID}/${storeId}`;
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
    const storeInfo: {
      store: Record<string, string | any>;
    } = await response.json();
    return { storeInfo, error: null };
  } catch (error) {
    return {
      storeInfo: null,
      error: "Unable to get store information. Please try again.",
    };
  }
}
