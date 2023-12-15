import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function TeamPhoto({page, setPage, setIsActive, isActive}) {

  const { t } = useTranslation("common");
  const [fileName, setFileName] = useState();

  function handleChange(event) {
    setFileName(event.target.files[0].name);
  }

  return (
    <>
      <h2 className="text-[24px] font-bold leading-[26px] text-primary mb-[15px] mt-[30px]">{t("photoTitle")}</h2>
      <div className="mt-[32px] grow">
        <div className="w-[138px] relative overflow-hidden">
          <input type="file" className="absolute top-0 left-0 h-full cursor-pointer opacity-0" onChange={handleChange} accept=".jpg, .png"/>
          <label className="flex item-center p-[12px] rounded-[5px] border border-black text-[16px] font-bold text-primary">{t("addPhoto")} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L13 7.41421V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V7.41421L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289L11.2929 4.29289Z" fill="#101223"/>
          </svg>
          </label>
        </div>
        <p className="text-[14px] leading-[22px] mt-[15px]">{fileName}</p>
      </div>
      <div className="flex mt-[20px]">
        <button onClick={() => { 
          setPage(page + 1); 
          setIsActive([...isActive, page + 1])
          }} type="button" className="btn-hover py-[10px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white flex items-center">{t("next")} <svg className="ml-[10px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9107 6.07733C12.2361 5.75189 12.7637 5.75189 13.0892 6.07733L16.4225 9.41066C16.7479 9.7361 16.7479 10.2637 16.4225 10.5892L13.0892 13.9225C12.7637 14.2479 12.2361 14.2479 11.9107 13.9225C11.5852 13.5971 11.5852 13.0694 11.9107 12.744L13.8214 10.8333H4.16659C3.70635 10.8333 3.33325 10.4602 3.33325 9.99992C3.33325 9.53968 3.70635 9.16659 4.16659 9.16659H13.8214L11.9107 7.25584C11.5852 6.9304 11.5852 6.40277 11.9107 6.07733Z" fill="white"/>
          </svg> 
        </button>
      </div>
    </>
  )
}