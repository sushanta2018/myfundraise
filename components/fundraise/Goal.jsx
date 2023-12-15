import Select from "react-select";
import { useTranslation } from "next-i18next";

export default function Goal() {
  const options = [
    { value: "$500-$1000", label: "$500-$1000" },
    { value: "$400-$1000", label: "$400-$1000" },
    { value: "$300-$1000", label: "$300-$1000" },
  ];

  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="text-[24px] font-bold leading-[26px] text-primary mb-[15px] mt-[30px]">
        {t("goal")}
      </h2>
      <p className="block text-[16px] leading-[22px] text-secondary">
        {t("goalDescription")}
      </p>
      <div className="mt-[15px] grow">
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          options={options}
          defaultValue={{ value: "$400-$1000", label: "$400-$1000" }}
        />
        <div className="mt-[40px]">
          <label className="text-[12px] font-bold text-secondary block">
            {t("missionFundraise")}
          </label>
          <textarea
            className="w-full py-[10px] border-b border-quaternary resize-none h-[135px] text-[16px] leading-[22px] outline-0"
            value={t("missionFundraiseValue")}
          ></textarea>
        </div>
      </div>
      <div className="flex mt-[20px]">
        <button
          type="button"
          className="hover:opacity-80 py-[10px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white flex items-center"
        >
          {t("finish")}{" "}
          <img
            alt="tick"
            src="/images/tick.png"
            className="w-[20px] ml-[10px]"
          />
        </button>
      </div>
    </>
  );
}
