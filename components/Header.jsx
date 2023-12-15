import Link from "next/link";
import EventMenu from "./event/EventMenu";

export default function Header({ event }) {
  return (
    <header className="lg:pt-[30px] pt-[25px] absolute top-0 w-full z-[1]">
      { event ? <div className="mx-auto container px-4 max-w-[878px]">
        <div className="bg-white py-[12px] px-[25px] rounded-[900px] flex items-center lg:justify-between justify-center">
          <Link href="" className="inline-block"><img src="/images/logo.png" alt="logo" /></Link>
          <EventMenu customClass={'lg:flex hidden'} />
        </div>
      </div> : <div className="mx-auto container px-4 max-w-[878px]">
        <div className="bg-white py-[12px] px-[25px] rounded-[900px] flex items-center justify-center">
          <Link href="" className="inline-block"><img src="/images/logo.png" alt="logo" /></Link>
        </div>
      </div> }
    </header>
  )
}