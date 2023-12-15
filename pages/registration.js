import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RegistrationForm from "@/components/RegistrationForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Registration = () => {
  const { t } = useTranslation("common");

  return (
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
