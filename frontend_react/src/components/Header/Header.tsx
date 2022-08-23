import React from "react";
import Head from "next/head";

const Header: React.FC = () => {
  return (
    <Head>
      <title>Vegard Aaberge Website</title>
      <meta
        name="description"
        content="This is Vegard Aaberge website, generared with react/next"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
  );
};

export default Header;
