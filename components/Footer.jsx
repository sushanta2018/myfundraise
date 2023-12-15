import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer>
      <div className="footer-top bg-white py-[64px] lg:block hidden">
        <div className="mx-auto container px-4 max-w-[878px]">
          <div className="flex flex-wrap">
            <div className="w-1/4">
              <h2 className="text-[18px] text-primary font-bold leading-[18px] m-[0px]">
                {t("fundraise")}
              </h2>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("virtualFundraising")}
              </Link>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("brochureFundraising")}
              </Link>
            </div>
            <div className="w-1/4">
              <h2 className="text-[18px] text-primary font-bold leading-[18px] m-[0px]">
                {t("shop")}
              </h2>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("shopCookies")}
              </Link>
            </div>
            <div className="w-1/4">
              <h2 className="text-[18px] text-primary font-bold leading-[18px] m-[0px]">
                {t("about")}
              </h2>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("aboutUs")}
              </Link>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("careers")}
              </Link>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("blog")}
              </Link>
            </div>
            <div className="w-1/4">
              <h2 className="text-[18px] text-primary font-bold leading-[18px] m-[0px]">
                {t("needMoreHelp")}
              </h2>
              <Link
                href=""
                className="hover:text-ternary block text-[16px] leading-[22px] text-secondary mt-[12px] mb-[0px]"
              >
                {t("contactUs")}
              </Link>
              <div className="lg:block hidden">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-[16px]">
        <div className="mx-auto container px-4 max-w-[878px]">
          <div className="flex flex-wrap items-center lg:justify-between mx-[-10px]">
            <div className="px-[10px] w-full lg:w-auto">
              <img src="/images/footer-logo.png" alt="" className="m-auto" />
            </div>
            <div className="px-[10px] w-full lg:w-auto lg:hidden flex justify-center">
              <LanguageSwitcher />
            </div>
            <div className="px-[10px] w-full lg:w-auto text-center mt-[12px] lg:mt-[0px]">
              <p className="block text-[16px] leading-[22px] text-secondary mb-[0px]">
                {t("rightsReserved")}
              </p>
            </div>
            <div className="px-[10px] w-full lg:w-auto text-center mt-[12px] lg:mt-[0px]">
              <div className="flex flex-wrap mx-[-2px] justify-center">
                <Link
                  href=""
                  className="block text-[16px] leading-[22px] text-secondary px-[2px]"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.40186 5C7.60621 5 6.84314 5.31607 6.28053 5.87868C5.71793 6.44129 5.40186 7.20435 5.40186 8V16C5.40186 16.7956 5.71793 17.5587 6.28053 18.1213C6.84314 18.6839 7.60621 19 8.40186 19H16.4019C17.1975 19 17.9606 18.6839 18.5232 18.1213C19.0858 17.5587 19.4019 16.7956 19.4019 16V8C19.4019 7.20435 19.0858 6.44129 18.5232 5.87868C17.9606 5.31607 17.1975 5 16.4019 5H8.40186ZM4.86632 4.46447C5.804 3.52678 7.07577 3 8.40186 3H16.4019C17.7279 3 18.9997 3.52678 19.9374 4.46447C20.8751 5.40215 21.4019 6.67392 21.4019 8V16C21.4019 17.3261 20.8751 18.5979 19.9374 19.5355C18.9997 20.4732 17.7279 21 16.4019 21H8.40186C7.07577 21 5.804 20.4732 4.86632 19.5355C3.92864 18.5979 3.40186 17.3261 3.40186 16V8C3.40186 6.67392 3.92864 5.40215 4.86632 4.46447ZM16.9019 6.5C17.4541 6.5 17.9019 6.94772 17.9019 7.5V7.51C17.9019 8.06228 17.4541 8.51 16.9019 8.51C16.3496 8.51 15.9019 8.06228 15.9019 7.51V7.5C15.9019 6.94772 16.3496 6.5 16.9019 6.5ZM9.57343 9.17157C10.3236 8.42143 11.341 8 12.4019 8C13.4627 8 14.4801 8.42143 15.2303 9.17157C15.9804 9.92172 16.4019 10.9391 16.4019 12C16.4019 13.0609 15.9804 14.0783 15.2303 14.8284C14.4801 15.5786 13.4627 16 12.4019 16C11.341 16 10.3236 15.5786 9.57343 14.8284C8.82328 14.0783 8.40186 13.0609 8.40186 12C8.40186 10.9391 8.82328 9.92172 9.57343 9.17157ZM12.4019 10C11.8714 10 11.3627 10.2107 10.9876 10.5858C10.6126 10.9609 10.4019 11.4696 10.4019 12C10.4019 12.5304 10.6126 13.0391 10.9876 13.4142C11.3627 13.7893 11.8714 14 12.4019 14C12.9323 14 13.441 13.7893 13.8161 13.4142C14.1911 13.0391 14.4019 12.5304 14.4019 12C14.4019 11.4696 14.1911 10.9609 13.8161 10.5858C13.441 10.2107 12.9323 10 12.4019 10Z"
                      fill="#366C9B"
                    />
                  </svg>
                </Link>
                <Link
                  href=""
                  className="block text-[16px] leading-[22px] text-secondary px-[2px]"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1592 3.75736C12.2844 2.63214 13.8106 2 15.4019 2H18.4019C18.9541 2 19.4019 2.44772 19.4019 3V7C19.4019 7.55228 18.9541 8 18.4019 8H15.4019V9H18.4019C18.7098 9 19.0006 9.14187 19.1901 9.38459C19.3796 9.6273 19.4467 9.94379 19.372 10.2425L18.372 14.2425C18.2607 14.6877 17.8607 15 17.4019 15H15.4019V21C15.4019 21.5523 14.9541 22 14.4019 22H10.4019C9.84957 22 9.40186 21.5523 9.40186 21V15H7.40186C6.84957 15 6.40186 14.5523 6.40186 14V10C6.40186 9.44772 6.84957 9 7.40186 9H9.40186V8C9.40186 6.4087 10.034 4.88258 11.1592 3.75736ZM15.4019 4C14.341 4 13.3236 4.42143 12.5734 5.17157C11.8233 5.92172 11.4019 6.93913 11.4019 8V10C11.4019 10.5523 10.9541 11 10.4019 11H8.40186V13H10.4019C10.9541 13 11.4019 13.4477 11.4019 14V20H13.4019V14C13.4019 13.4477 13.8496 13 14.4019 13H16.6211L17.1211 11H14.4019C13.8496 11 13.4019 10.5523 13.4019 10V8C13.4019 7.46957 13.6126 6.96086 13.9876 6.58579C14.3627 6.21071 14.8714 6 15.4019 6H17.4019V4H15.4019Z"
                      fill="#366C9B"
                    />
                  </svg>
                </Link>
                <Link
                  href=""
                  className="block text-[16px] leading-[22px] text-secondary px-[2px]"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.50985 3.54798C3.68019 3.21184 4.02503 3 4.40186 3H8.66886C8.98741 3 9.2869 3.15177 9.47527 3.40865L13.7499 9.23779L19.6948 3.29289C20.0853 2.90237 20.7184 2.90237 21.109 3.29289C21.4995 3.68342 21.4995 4.31658 21.109 4.70711L14.9465 10.8696L21.2083 19.4086C21.4311 19.7125 21.4642 20.1159 21.2939 20.452C21.1235 20.7882 20.7787 21 20.4019 21H16.1349C15.8163 21 15.5168 20.8482 15.3284 20.5914L11.0539 14.7622L5.10897 20.7071C4.71844 21.0976 4.08528 21.0976 3.69475 20.7071C3.30423 20.3166 3.30423 19.6834 3.69475 19.2929L9.85724 13.1304L3.59545 4.59135C3.37261 4.28747 3.33952 3.88412 3.50985 3.54798ZM12.7721 11.2866C12.803 11.338 12.839 11.3872 12.8799 11.4336L18.4285 19H16.6416L6.37523 5H8.16211L12.7721 11.2866Z"
                      fill="#366C9B"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="px-[10px] w-full lg:w-auto text-center mt-[12px] lg:mt-[0px]">
              <div className="flex flex-wrap mx-[-5px] justify-center">
                <Link
                  href=""
                  className="hover:text-ternary block text-[16px] leading-[22px] text-secondary px-[5px]"
                >
                  {t("privacyPolicy")}
                </Link>
                <Link
                  href=""
                  className="hover:text-ternary block text-[16px] leading-[22px] text-secondary px-[5px]"
                >
                  
                  {t("termsConditions")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
