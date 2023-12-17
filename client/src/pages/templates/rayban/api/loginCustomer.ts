import toast from "react-hot-toast";
import { Session } from "../../../../types/auth";
import { storeCookie } from "../../../../utils/auth";

const LOGIN_CUSTOMERS_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/customers/login`;

export async function loginCustomer(body: Record<string, string>) {
  try {
    const { storeSlug, email, password } = body;
    const requestData = {
      storeSlug,
      email,
      password,
    };
    const response = await fetch(LOGIN_CUSTOMERS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    if (!response.ok) {
      throw new Error("There was a server error");
    }
    const data: Record<string, string> = await response.json();

    if (data.token) {
      storeCookie(`${storeSlug}-token`, data.token);
      toast.success("Login success", {
        duration: 2000,
      });
    }

   

    return { data, error: null };
  } catch (e) {
    return { data: null, error: "There was a server error" };
  }
}
