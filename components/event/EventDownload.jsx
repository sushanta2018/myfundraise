import EventMenu from "./EventMenu";
import { useTranslation } from "next-i18next";

export default function EventDownload() {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-wrap">
      <div className="xl:w-[716px] lg:w-[500px] w-full lg:h-auto h-[337px]">
        <img src="/images/event-bg.png" alt="" className="w-full h-full object-cover object-top"/>
      </div>
      <div className="right-content lg:pt-[154px] pb-[30px] xl:pl-[100px] lg:pl-[50px] pr-[15px] pt-[35px] pl-[15px]">
        <div className="max-w-[480px] lg:m-[0px] m-auto">
          <EventMenu customClass={'lg:hidden flex justify-between mb-[35px]'} />
          <h1 className="text-quinary text-[18px] font-bold mb-[32px] lg:block hidden">{t("download")}</h1>
          <h2 className="text-primary text-[24px] font-bold leading-[26px] mb-[8px]">{t("downloadTitle")}</h2>
          <p className="text-secondary text-[16px] leading-[22px] mb-[32px]">{t("downloadPara")}</p>
          <div>
            <button type="button" className="py-[8px] px-[24px] rounded-[40px] text-[16px] font-bold border border-primary text-primary">{t("enterDashboard")}</button>
          </div>
          <div className="mt-[20px]">
            <button type="button" className="hover:opacity-80 py-[8px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white">{t("download")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}