import { useRouter } from "next/router";
import { Listbox } from "@headlessui/react";

const languages = [
  { id: "en", name: "English" },
  { id: "vi", name: "Tiếng Việt" },
];

function LanguageSwitcher() {
  const router = useRouter();
  const { locale, push } = router;

  const changeLanguage = (newLocale) => {
    router.push(router.asPath, router.asPath, { locale: newLocale.id });
  };

  return (
    <Listbox value={locale} onChange={changeLanguage}>
      {({ open }) => (
        <>
          <div className="relative mt-[12px]">
            <Listbox.Button className="py-[6px] px-[10px] flex items-center justify-between border border-gray-300 rounded-md bg-white text-gray-900 cursor-pointer text-[14px] leading-[18px]">
              {languages.find((lang) => lang.id === locale)?.name} <img alt="arrow-down" src="/images/arrow-down.png" className="w-[18px] h-[18px] relative left-[2px]" />
            </Listbox.Button>
            <Listbox.Options className="absolute w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
              {languages.map((lang) => (
                <Listbox.Option key={lang.id} value={lang}>
                  {({ active, selected }) => (
                    <div
                      className={`${
                        active ? "text-white bg-ternary" : "text-secondary"
                      } cursor-pointer select-none relative px-[10px] py-[6px]`}
                    >
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-white" : "text-indigo-600"
                          } absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ) : null}
                      <p className="block text-[14px] leading-[20px] m-[0px]">{lang.name}</p>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default LanguageSwitcher;
