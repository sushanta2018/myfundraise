import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import EventDownload from "@/components/event/EventDownload";

export default function Download() {
  const { t } = useTranslation("common");
  let eventHeader = true;

  return (
   <>
     <Header event={eventHeader}/>
     <EventDownload />
     <Footer />
   </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
