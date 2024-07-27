import Image from "next/image";

export default function HomePageView() {
  return (
    <div className="mx-auto w-[430px] min-h-[100vh] flex flex-col justify-between overflow-hidden">
      <Image
        src="/images/pages/home-1.png"
        alt="top-nav"
        width={430}
        height={200}
        loading="lazy"
        style={{ margin: "auto" }}
      />
      <div className="flex flex-row gap-[12px] flex-grow my-[32px] pl-[16px] pr-[8px]">
        <div className="flex flex-col">
          <p className="text-emerald-600 font-bold text-[16px]">
            Baru! coba random date di Grab
          </p>

          <p className="text-[12px] leading-0">
            Atur jalan-jalan & makan barengmu bersama orang baru.
          </p>
        </div>

        <div className="ml-[8px] min-w-[200px] flex flex-row justify-end items-end hover:opacity-80 transition-all duration-300 cursor-pointer">
          <Image
            src="/images/illustration-primary.svg"
            alt="top-nav"
            width={100}
            height={70}
            loading="lazy"
          />
          <div className="w-[120px] flex p-[10px] pl-[20px] pr-[12px] mb-[16px] bg-teal-600 rounded-r-[4px]">
            <p className="text-[16px] text-right font-bold text-white whitespace-nowrap">
              Grab Match
            </p>
          </div>
        </div>
      </div>
      <Image
        className="pb-[32px]"
        src="/images/pages/home-2.png"
        alt="body"
        width={430}
        height={250}
        loading="lazy"
        style={{ margin: "auto" }}
      />
      <Image
        className="w-full sticky bottom-0"
        src="/images/pages/home-3.png"
        alt="footer"
        width={325}
        height={500}
        loading="lazy"
        style={{ margin: "auto" }}
      />
    </div>
  );
}
