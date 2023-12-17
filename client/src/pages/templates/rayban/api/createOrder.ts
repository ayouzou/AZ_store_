import { Session } from "../../../../types/auth";


const CREATE_ORDER_ENDPOINT = `${import.meta.env.VITE_API_URL as string
}/orders`;

export async function createOrder(
    body: Record<string, string>,
    session: Session,
){
    try {
        if (!session.user?.token) throw new Error("No token found");
        const url = `${CREATE_ORDER_ENDPOINT}`;
        console.log(url)
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user?.token}`,
          },
        });
        if (!response.ok) throw new Error("Error creating order ");
        const data = await response.json();
        return { data, error: null };
      } catch (error) {
        console.error(error);
        return { data: null, error };
      }
}