import { Session } from "../../../../types/auth";

const GET_STORES_ENDPOINT = `${import.meta.env.VITE_API_URL as string}/stores`;

export async function getStoresByUserId(session: Session) {
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");
    const token = session.user.token;
    const url = `${GET_STORES_ENDPOINT}?userId=${session.user.id}`;
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
    const data: { stores: Record<string, string | boolean>[] } =
      await response.json();
    return data;
  } catch (error) {
    return { stores: null, error };
  }
}
