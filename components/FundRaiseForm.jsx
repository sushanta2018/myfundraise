import { useState } from "react";
import Email from "./fundraise/Email";
import Name from "./fundraise/Name";
import Organization from "./fundraise/OrganizationType";
import StartFundraise from "./fundraise/StartFundraise";
import Members from "./fundraise/Members";
import TeamPhoto from "./fundraise/TeamPhoto";
import Goal from "./fundraise/Goal";

export default function FundRaiseForm() {
  const [page, setPage] = useState(0);
  const [isActive, setIsActive] = useState([0]);

  const componentList = [
    <Email 
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    <Name 
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    <Organization 
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    <StartFundraise
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    <Members
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    <TeamPhoto
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    <Goal
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  ];

  return (
    <div className="overflow-hidden lg:pt-[140px] pb-[56px]">
      <div className="relative">
        <div className="lg:h-full lg:absolute top-0 lg:rounded-tr-[10px] lg:rounded-br-[10px] overflow-hidden 2xl:w-[55.5vw] lg:w-[53vw] h-[380px]">
          { page  === 0 && <img alt="image_01" src="/images/image_01.png" className="w-full h-full object-cover object-top"/> }
          { page  === 1 && <img alt="image_02" src="/images/image_02.png" className="w-full h-full object-cover object-top"/> }
          { page  === 2 && <img alt="image_03" src="/images/image_03.png" className="w-full h-full object-cover object-top"/> }
          { page  === 3 && <img alt="image_04" src="/images/image_04.png" className="w-full h-full object-cover object-top"/> }
          { page  === 4 && <img alt="image_05" src="/images/image_05.png" className="w-full h-full object-cover object-bottom"/> }
          { page  === 5 && <img alt="image_06" src="/images/image_06.png" className="w-full h-full object-cover object-top"/> }
          { page  === 6 && <img alt="image_07" src="/images/image_07.png" className="w-full h-full object-cover object-top"/> }
        </div>
        <div className="mx-auto container px-4 max-w-[878px] lg:mt-[0px] xs:mt-[-80px] mt-[-108px]">
          <div className="lg:p-[17px] relative z-10">
            <div className="bg-white rounded-[10px] lg:p-[32px] p-[25px] max-w-[465px] min-h-[536px] flex flex-col lg:ml-auto lg:mr-[0px] mx-auto">
              <ul className="flex mx-[-4px] flex-wrap">
                <li className="px-[4px] mb-[8px]"><span className="rounded-[90px] h-[8px] block bg-ternary w-[32px]"></span></li>
                <li className="px-[4px] mb-[8px]"><span className={`rounded-[90px] h-[8px] block bg-ternary w-[32px] ${ isActive.includes(1) ? 'opacity-100' : 'opacity-30'}`}></span></li>
                <li className="px-[4px] mb-[8px]"><span className={`rounded-[90px] h-[8px] block bg-ternary w-[32px] ${ isActive.includes(2) ? 'opacity-100' : 'opacity-30'}`}></span></li>
                <li className="px-[4px] mb-[8px]"><span className={`rounded-[90px] h-[8px] block bg-ternary w-[32px] ${ isActive.includes(3) ? 'opacity-100' : 'opacity-30'}`}></span></li>
                <li className="px-[4px] mb-[8px]"><span className={`rounded-[90px] h-[8px] block bg-ternary w-[32px] ${ isActive.includes(4) ? 'opacity-100' : 'opacity-30'}`}></span></li>
                <li className="px-[4px] mb-[8px]"><span className={`rounded-[90px] h-[8px] block bg-ternary w-[32px] ${ isActive.includes(5) ? 'opacity-100' : 'opacity-30'}`}></span></li>
                <li className="px-[4px] mb-[8px]"><span className={`rounded-[90px] h-[8px] block bg-ternary w-[32px] ${ isActive.includes(6) ? 'opacity-100' : 'opacity-30'}`}></span></li>
              </ul>
              {componentList[page]}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}