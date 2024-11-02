import { AppProps } from "next/app";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import "@fontsource/inter";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
