"use client";
import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/config/QueryClient";

const AppProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default AppProvider;
