import "react-datepicker/dist/react-datepicker.css";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>MyFundraise</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
