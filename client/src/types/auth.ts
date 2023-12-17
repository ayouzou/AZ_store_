import React from "react";

export type User = {
  id: string;
  email: string;
  role: "SELLER" | "CUSTOMER" | "ADMIN";
  token: string;
  username: string;
} | null;

export type Session = {
  isAuthenticated: boolean;
  user: User;
};

export type SessionProviderProps = {
  storeSlug?: string;
  children: React.ReactNode;
};
