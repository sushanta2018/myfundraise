import Link from "next/link";
import MoreOptions from "./MoreOptions";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function VerifyCode() {
  const [isShow, setIsShow] = useState();
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="text-[24px] font-bold leading-[26px] text-quinary mb-[32px]">{t("yourAccount")}</h2>
      { !isShow &&
        <>
          <h2 className="text-[24px] font-bold leading-[26px] text-primary mb-[5px]">{t("enterthecode")}</h2>
          <p className="block text-[16px] leading-[22px] text-secondary">{t("sentSMSTo")} 000-000-0000</p>
          <div className="mt-[32px] grow">
            <input class="border-0 border-b h-[40px] py-[8px] placeholder-secondary text-dark w-full form-control text-[16px]" placeholder="4 Digits Code" type="text" maxLength={4}/>
            <p className="block text-[16px] leading-[22px] text-secondary mt-[32px]">{t("code")} <Link className="text-ternary" 
            onClick={ () => setIsShow(!isShow) } href="">{t("moreOptions")}</Link></p>
          </div>
          <div className="flex mt-[20px]">
            <button type="button" className="btn-hover py-[10px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white flex items-center">{t("continue")} <svg className="ml-[10px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9107 6.07733C12.2361 5.75189 12.7637 5.75189 13.0892 6.07733L16.4225 9.41066C16.7479 9.7361 16.7479 10.2637 16.4225 10.5892L13.0892 13.9225C12.7637 14.2479 12.2361 14.2479 11.9107 13.9225C11.5852 13.5971 11.5852 13.0694 11.9107 12.744L13.8214 10.8333H4.16659C3.70635 10.8333 3.33325 10.4602 3.33325 9.99992C3.33325 9.53968 3.70635 9.16659 4.16659 9.16659H13.8214L11.9107 7.25584C11.5852 6.9304 11.5852 6.40277 11.9107 6.07733Z" fill="white"/>
              </svg> 
            </button>
          </div>
        </>
      }

      { isShow && <MoreOptions /> }
    </>
  )
}