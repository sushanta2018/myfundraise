import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import EventInvite from "@/components/event/EventInvite";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Invite() {
  const { t } = useTranslation("common");
  let eventHeader = true;

  return (
   <>
     <Header event={eventHeader}/>
     <EventInvite />
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
