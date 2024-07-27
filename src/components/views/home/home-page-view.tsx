import Image from "next/image";

export default function HomePageView() {
  return (
    <div className="mx-auto max-w-[325px] flex flex-col justify-center">
      <div className="absolute  w-[325px] h-[200px] z-1">
        <Image
          src="/images/pages/home-1.png"
          alt="top-nav"
          layout="fill"
          objectFit="contain"
          loading="lazy"
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
}
