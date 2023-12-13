import Link from "next/link";

export default function MoreOptions() {

  return (
    <>
      <h2 className="text-[24px] font-bold leading-[26px] text-primary mb-[32px]">Choose another way to verify your account</h2>
      <ul>
        <li className='mb-[8px]'>
          <Link href='javascript:void(0)' className='btn-hover flex items-center justify-center py-[8px] px-[12px] rounded-[100px] border border-black text-[16px] font-bold text-center leading-[22px]'>New Code To My Phone <img className="ml-[5px]" src="/images/right-arrow.png" alt="right-arrow" /></Link>
        </li>
        <li className='mb-[8px]'>
          <Link href='javascript:void(0)' className='btn-hover flex items-center justify-center py-[8px] px-[12px] rounded-[100px] border border-black text-[16px] font-bold text-center leading-[22px]'>New Phone Number <img className="ml-[5px]" src="/images/right-arrow.png" alt="right-arrow" /></Link>
        </li>
        <li className='mb-[8px]'>
          <Link href='javascript:void(0)' className='btn-hover flex items-center justify-center py-[8px] px-[12px] rounded-[100px] border border-black text-[16px] font-bold text-center leading-[22px]'>Contact MyFoundraise Support <img className="ml-[5px]" src="/images/right-arrow.png" alt="right-arrow" /></Link>
        </li>
      </ul>
    </>
  )
}