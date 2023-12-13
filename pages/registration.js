import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import RegistrationForm from "@/components/RegistrationForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Registration = () => {
  const { t } = useTranslation("common");

  return (
    // <div>
    //   <LanguageSwitcher />
    //   <h1>{t("contactTitle")}</h1>
    //   <p>{t("contactDescription")}</p>
    // </div>
    <>
      <Header />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default Registration;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
