import { Session } from "../../../../types/auth";

const DELETE_STORE_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/stores`;

export async function deleteStore(
  body: Record<string, string | undefined>,
  session: Session
) {
  // console.log("getStores");
  try {
    if (!body.id) throw new Error("No store id provided");
    if (!session?.user?.token) throw new Error("Unauthorized");
    const token = session.user.token;
    const response = await fetch(DELETE_STORE_ENDPOINT, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    console.log("this is response for delete store",response)
    if (!response.ok) {
      throw new Error();
    }
    const data: { stores: Record<string, string>[] } = await response.json();
    const stores = data.stores;
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: "Unable to get stores",
    };
  }
}
