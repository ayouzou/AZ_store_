import { Session } from "../../../../types/auth";

const GET_ORDERS_USER_BY_STORE_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/orders`;

export const getOrdersUserByStore = async (
    body: Record<string, any>,
    session: Session
  ) => {
    try {
      if (!session.user?.token) throw new Error("No token found");
      console.log(body)
      const storeSlug  = body.storeSlug

      const url = `${GET_ORDERS_USER_BY_STORE_ENDPOINT}/two/${storeSlug}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user?.token}`,
        },
      });
      if (!response.ok) throw new Error("Error fetching Orders User by store");
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error };
    }
  };

