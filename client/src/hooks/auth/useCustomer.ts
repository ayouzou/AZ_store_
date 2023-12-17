import { useContext } from "react";
import { deleteCookie } from "../../utils/auth";
import { SessionContext } from "../../context/auth/customer";

export default function useCustomer(storeSlug: string) {
  const authContext = useContext(SessionContext);

  return {
    customer: authContext,
    logout: () => deleteCookie(`${storeSlug}-token`),
  };
}
