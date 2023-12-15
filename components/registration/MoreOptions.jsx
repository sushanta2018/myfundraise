import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function MoreOptions() {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="text-[24px] font-bold leading-[26px] text-primary mb-[32px]">{t("moreOptionsList")}</h2>
      <ul>
        <li className='mb-[8px]'>
          <Link href='' className='btn-hover flex items-center justify-center py-[8px] px-[12px] rounded-[100px] border border-black text-[16px] font-bold text-center leading-[22px]'>{t("newCodeToMyPhone")} <img className="ml-[5px]" src="/images/right-arrow.png" alt="right-arrow" /></Link>
        </li>
        <li className='mb-[8px]'>
          <Link href='' className='btn-hover flex items-center justify-center py-[8px] px-[12px] rounded-[100px] border border-black text-[16px] font-bold text-center leading-[22px]'>{t("newPhoneNumber")} <img className="ml-[5px]" src="/images/right-arrow.png" alt="right-arrow" /></Link>
        </li>
        <li className='mb-[8px]'>
          <Link href='' className='btn-hover flex items-center justify-center py-[8px] px-[12px] rounded-[100px] border border-black text-[16px] font-bold text-center leading-[22px]'>{t("contactSupport")} <img className="ml-[5px]" src="/images/right-arrow.png" alt="right-arrow" /></Link>
        </li>
      </ul>
    </>
  )
}