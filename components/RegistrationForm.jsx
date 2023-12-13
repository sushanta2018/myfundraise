import { useState } from "react";
import VerifyMobile from "./registration/VerifyMobile";
import VerifyCode from "./registration/VerifyCode";

export default function RegistrationForm() {
  const [page, setPage] = useState(0);
  const [isActive, setIsActive] = useState([0]);

  const componentList = [
    <VerifyMobile 
      page={page}
      setPage={setPage}
    />,
    <VerifyCode />
  ];

  return (
    <div className="overflow-hidden lg:pt-[140px] pb-[56px]">
      <div className="relative">
        <div className="lg:h-full lg:absolute top-0 lg:rounded-tr-[10px] lg:rounded-br-[10px] overflow-hidden 2xl:w-[55.5vw] lg:w-[53vw] h-[380px]">
          { page  === 0 && <img alt="image_08" src="/images/image_08.png" className="w-full h-full object-cover object-top"/> }
          { page  === 1 && <img alt="image_09" src="/images/image_09.png" className="w-full h-full object-cover object-top"/> }
        </div>
        <div className="mx-auto container px-4 max-w-[878px] lg:mt-[0px] xs:mt-[-80px] mt-[-108px]">
          <div className="lg:p-[17px] relative z-10">
            <div className="bg-white rounded-[10px] lg:p-[32px] p-[25px] max-w-[465px] min-h-[536px] flex flex-col lg:ml-auto lg:mr-[0px] mx-auto">
              {componentList[page]}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}