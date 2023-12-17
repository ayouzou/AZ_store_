import { Session } from "../../../../types/auth";

const DELETE_REVIEW_ENDPOINT = `${import.meta.env.VITE_API_URL as string
    }/reviews`;


export async function deleteReview(
    body: Record<string, string | undefined>,
    session: Session
) {
    try {
        if (!body.id) throw new Error("No review id provided");

        if (!session?.user?.token) throw new Error("Unauthorized");
        const token = session?.user.token;
        const response = await fetch(DELETE_REVIEW_ENDPOINT, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error();
        }
        const data: { reviews: Record<string, string>[] } = await response.json();
        const reviews = data.reviews;
        return { data, error: null };
    } catch (error) {
        return {
            data: null,
            error: "Unable to delete review",
        };
    }

}