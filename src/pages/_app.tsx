import { AppProps } from "next/app";
import "@/styles/globals.css";
import "@fontsource/inter";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
