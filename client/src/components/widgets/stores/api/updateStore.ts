import { Session } from "../../../../types/auth";

const UPDATE_STORE_ENDPOINT = `${
  import.meta.env.VITE_API_URL as string
}/stores`;

export async function updateStore(
  body: Record<string, string>,
  session: Session
) {
  console.log("this is ", body);
  try {
    if (!session?.user?.token) throw new Error("Unauthorized");
    const token = session.user.token;
    const response = await fetch(UPDATE_STORE_ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    console.log("this response", response);

    console.log("this is2 ", body);

    const data: Record<string, string> = await response.json();
    if (!response.ok) {
      throw new Error();
    }
    console.log(data);
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: "Unable to create store",
    };
  }
}
