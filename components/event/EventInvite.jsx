import EventMenu from "./EventMenu";

export default function EventInvite() {
  return (
    <div className="flex flex-wrap">
      <div className="xl:w-[716px] lg:w-[500px] w-full lg:h-auto h-[337px]">
        <img src="/images/event-bg.png" alt="" className="w-full h-full object-cover object-top"/>
      </div>
      <div className="right-content lg:pt-[154px] pb-[30px] xl:pl-[100px] lg:pl-[50px] pr-[15px] pt-[35px] pl-[15px]">
        <div className="max-w-[480px] lg:m-[0px] m-auto">
          <EventMenu customClass={'lg:hidden flex justify-between mb-[35px]'} />
          <h1 className="text-quinary text-[18px] font-bold mb-[32px] lg:block hidden">Invite</h1>
          <h2 className="text-primary text-[24px] font-bold leading-[26px] mb-[8px]">Invite your team to participate</h2>
          <p className="text-secondary text-[16px] leading-[22px] mb-[32px]">Copy and share the message with your team, it has all necessary information for them to get started.</p>
          <div className="rounded-[10px] bg-quaternary p-[12px] mb-[32px]">
            <div className="h-[270px] overflow-y-auto">
              <p className="text-[16px] text-primary leading-[22px] mb-[20px]">Team - I set up a MyFundraise virtual fundraiser! It’s 100% contactless, we keep up to 30% of the sales and the product ships directly to your supporters.</p>
              <p className="text-[16px] text-primary leading-[22px] mb-[20px]">We’ll each create a Virtual Cookie Shop and sell Cookies By Design Freshly Baked Cookies and Cookie Bouquets. Prices range from $23.99, and Curated Bouquets up to $105.99. The cookies are delicious, but also beautiful, which makes them a special treat!
              Our fundraiser begins on X and goes until X.
              Before the fundraiser begins:1. Click the application link:2. Enter our Event Code provided.3. Create your Virtual Cookie Shop.
              Thank you for the support!</p>
            </div>
          </div>
          <div>
            <button type="button" className="py-[8px] px-[24px] rounded-[40px] text-[16px] font-bold border border-primary text-primary">Copy Message</button>
          </div>
          <div className="mt-[20px]">
            <button type="button" className="hover:opacity-80 py-[8px] px-[24px] rounded-[40px] text-[16px] font-bold bg-ternary text-white">Download web app</button>
          </div>
        </div>
      </div>
    </div>
  )
}