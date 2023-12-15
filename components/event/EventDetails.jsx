import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import EventMenu from "./EventMenu";
import { useTranslation } from "next-i18next";

export default function EventDetails() {
  const [startDate, setStartDate] = useState(new Date("2023/02/08"));
  const [endDate, setEndDate] = useState(new Date("2023/02/10"));
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-wrap">
      <div className="xl:w-[716px] lg:w-[500px] w-full lg:h-auto h-[337px]">
        <img src="/images/event-bg.png" alt="" className="w-full h-full object-cover object-top"/>
      </div>
      <div className="right-content lg:pt-[154px] pb-[30px] xl:pl-[100px] lg:pl-[50px] pr-[15px] pt-[35px] pl-[15px]">
        <div className="max-w-[480px] lg:m-[0px] m-auto">
          <EventMenu customClass={'lg:hidden flex justify-between mb-[35px]'} />
          <h1 className="text-quinary text-[18px] font-bold mb-[32px] lg:block hidden">{t("eventDetails")}</h1>
          <h2 className="text-primary text-[24px] font-bold leading-[26px] mb-[8px]">{t("eventTitle")}</h2>
          <p className="text-secondary text-[16px] leading-[22px] mb-[32px]">{t("eventPara")}</p>
          <div className="flex flex-wrap mx-[-8px]">
            <div className="lg:w-1/2 w-full px-[8px] mb-[32px]">
              <label className='text-[12px] font-bold text-secondary block leading-[12px]'>Start date/time</label>
              <div className="range-date-picker">
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  timeInputLabel="Time:"
                  dateFormat="EEEE, MMM d h:mm aa"
                  showTimeInput
                  showPopperArrow={false}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-[8px] mb-[32px]">
              <label className='text-[12px] font-bold text-secondary block leading-[12px]'>End date/time</label>
              <div className="range-date-picker">
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  timeInputLabel="Time:"
                  dateFormat="EEEE, MMM d h:mm aa"
                  showTimeInput
                  showPopperArrow={false}
                />
              </div>
            </div>
          </div>
          <div>
            <button type="button" className="py-[8px] px-[24px] rounded-[40px] text-[16px] font-bold border border-primary text-primary">{t("save")}</button>
          </div>
          <div className="mt-[20px]">
            <button type="button" className="hover:opacity-80 py-[8px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white">{t("inviteYourTeam")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}