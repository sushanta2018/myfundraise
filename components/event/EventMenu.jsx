import Link from "next/link";
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";

export default function EventMenu({ customClass }) {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <ul className={`${customClass} lg:mx-[-12px] mx-[-10px]`}>
      <li className="lg:px-[12px] px-[10px]"><Link href='/event' className={`inline-block text-[18px] ${router.pathname == "/event" ? "font-bold text-ternary" : "text-quinary"}`}>{t("eventDetails")}</Link></li>
      <li className="lg:px-[12px] px-[10px]"><Link href='/invite' className={`inline-block text-[18px] ${router.pathname == "/invite" ? "font-bold text-ternary" : "text-quinary"}`}>{t("invite")}</Link></li>
      <li className="lg:px-[12px] px-[10px]"><Link href='/download' className={`inline-block text-[18px] ${router.pathname == "/download" ? "font-bold text-ternary" : "text-quinary"}`}>{t("download")}</Link></li>
    </ul>
  )
}