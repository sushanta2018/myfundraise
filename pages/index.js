'use-client';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FundRaiseForm from "@/components/FundRaiseForm";

export default function Home() {
  const { t } = useTranslation("common");
  console.log(t("yourfundraisetitle"), "lang");

  return (
    <>
      <Header />
      <FundRaiseForm />
      <Footer />
    </>
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    // >
    //   <LanguageSwitcher />
    //   <h1 className="text-black font-bold text-2xl">
    //     {t("yourfundraisetitle")}
    //   </h1>
    // </main>
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
