
import { Session } from "../../../../types/auth";

const CREATE_REVIEW_ENDPOINT = `${import.meta.env.VITE_API_URL as string
    }/reviews`;

export async function createReview(
    body: Record<string, string>,
    session: Session,
) {

    try {
        if (!session?.user?.token) throw new Error("Unauthorized");
        const token = session.user.token;
        const productId: string = body.productId;
  
        
        const requestData = {...body,productId };
        const response = await fetch(CREATE_REVIEW_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestData),
        });
        if (!response.ok) {
          
            throw new Error("There was a server error");
        }
        const data: Record<string, string> = await response.json();
      
        return { data, error: null };
    } catch (e) {
        return { data: null, error: "There was a server error" };
    }
}