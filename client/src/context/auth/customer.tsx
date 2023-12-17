import { createContext, useEffect, useMemo, useState } from "react";
import { Session, SessionProviderProps } from "../../types/auth";
import { decodeJWT, getCookie } from "../../utils/auth";
import isEqual from 'lodash/isEqual';

export const SessionContext = createContext<Session>({
    isAuthenticated: false,
    user: null
});

export function CustomerSessionProvider({ children, storeSlug }: SessionProviderProps) {
    const customerAuthCookieName = `${storeSlug as string}-token`
    const [decodedToken, setDecodedToken] = useState(decodeJWT(customerAuthCookieName))
    const token = getCookie(`${storeSlug as string}-token`)
    const value: Session = useMemo(() => (
        decodedToken ? {
            isAuthenticated: true,
            user: {
                id: decodedToken.id,
                email: decodedToken.email,
                storeSlug: decodedToken?.storeSlug,
                username: decodedToken.username,
                token,
            }
        } : {
            isAuthenticated: false,
            user: null
        }
    ), [decodedToken, token])
    const checkCookieChanges = () => {
        const newDecodedToken = decodeJWT(customerAuthCookieName);
        // eslint-disable-next-line
        if (!isEqual(newDecodedToken, decodedToken)) {
            setDecodedToken(newDecodedToken);
        }
    };


    useEffect(() => {
        const interval = setInterval(checkCookieChanges, 1000);

        return () => {
            clearInterval(interval);
        };
    });


    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
}
