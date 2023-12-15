"use-client";
import Footer from "@/components/Footer";
import FundRaiseForm from "@/components/FundRaiseForm";
import Header from "@/components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Header />
      <FundRaiseForm />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  console.log(locale, "locale");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
