import { useState } from "react";
import ReactDatePicker from "react-datepicker";

export default function StartFundraise({page, setPage, setIsActive, isActive}) {
  const [startDate, setStartDate] = useState();

  return (
    <>
      <h2 className="text-[24px] font-bold leading-[26px] text-primary mb-[15px] mt-[30px]">When are you looking to start fundraising?</h2>
      <div className="mt-[32px] grow">
        <ul className='flex flex-wrap mx-[-4px]'>
          <li className='px-[4px] mb-[8px]'>
            <div className='relative item-radio-card'>
              <input type="radio" name="start_fund" className='absolute z-10 top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
              <label className='block py-[8px] px-[24px] rounded-[100px] border border-black text-[16px] leading-[22px]'>ASAP</label>
            </div>
          </li>
          <li className='px-[4px] mb-[8px]'>
            <div className='relative item-radio-card'>
              <input type="radio" name="start_fund" className='absolute z-10 top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
              <label className='block py-[8px] px-[24px] rounded-[100px] border border-black text-[16px] leading-[22px]'>In the next 4 weeks</label>
            </div>
          </li>
          <li className='px-[4px] mb-[8px]'>
            <div className='relative item-radio-card'>
              <input type="radio" name="start_fund" className='absolute z-10 top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
              <label className='block py-[8px] px-[24px] rounded-[100px] border border-black text-[16px] leading-[22px]'>In the Next Few Months</label>
            </div>
          </li>
          <li className='px-[4px] mb-[8px]'>
            <div className='relative item-radio-card'>
              <input type="radio" name="start_fund" className='absolute z-10 top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
              <label className='block py-[8px] px-[24px] rounded-[100px] border border-black text-[16px] leading-[22px]'>I’m Not Sure</label>
            </div>
          </li>
        </ul>
        <div className="mt-[30px]">
          <ReactDatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showPopperArrow={false}
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V19C21 19.7957 20.6839 20.5587 20.1213 21.1213C19.5587 21.6839 18.7957 22 18 22H6C5.20435 22 4.44129 21.6839 3.87868 21.1213C3.31607 20.5587 3 19.7957 3 19V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H7V3C7 2.44772 7.44772 2 8 2ZM7 6H6C5.73478 6 5.48043 6.10536 5.29289 6.29289C5.10536 6.48043 5 6.73478 5 7V10H19V7C19 6.73478 18.8946 6.48043 18.7071 6.29289C18.5196 6.10536 18.2652 6 18 6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6ZM19 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V12ZM7 15C7 14.4477 7.44772 14 8 14H10C10.5523 14 11 14.4477 11 15V17C11 17.5523 10.5523 18 10 18H8C7.44772 18 7 17.5523 7 17V15Z" fill="#5B5D6B"/>
              </svg>
            }
            placeholderText="Pick Specific Date"
          />
        </div>
      </div>
      <div className="flex mt-[20px]">
        <button onClick={() => { 
          setPage(page + 1); 
          setIsActive([...isActive, page + 1])
          }} type="button" className="btn-hover py-[10px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white flex items-center">Next <svg className="ml-[10px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9107 6.07733C12.2361 5.75189 12.7637 5.75189 13.0892 6.07733L16.4225 9.41066C16.7479 9.7361 16.7479 10.2637 16.4225 10.5892L13.0892 13.9225C12.7637 14.2479 12.2361 14.2479 11.9107 13.9225C11.5852 13.5971 11.5852 13.0694 11.9107 12.744L13.8214 10.8333H4.16659C3.70635 10.8333 3.33325 10.4602 3.33325 9.99992C3.33325 9.53968 3.70635 9.16659 4.16659 9.16659H13.8214L11.9107 7.25584C11.5852 6.9304 11.5852 6.40277 11.9107 6.07733Z" fill="white"/>
          </svg> 
        </button>
      </div>
    </>
  )
}