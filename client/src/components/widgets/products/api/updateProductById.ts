import { Session } from "../../../../types/auth";

const CREATE_PRODUCT_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/products`;

export const updateProductById = async (
  body: Record<string, string>,
  session: Session
) => {
  try {
    if (!session.user?.token) throw new Error("No token found");
    const url = `${CREATE_PRODUCT_ENDPOINT}`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.token}`,
      },
    });
    if (!response.ok) throw new Error("Error creating product in store");
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};
