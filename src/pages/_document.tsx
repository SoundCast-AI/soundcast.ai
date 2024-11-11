import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <GoogleAnalytics gaId="G-68G8T7K84E" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
