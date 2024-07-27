import Image from "next/image";

export default function HomePageView() {
  return (
    <div className="mx-auto max-w-[325px] flex flex-col justify-center">
      <Image
        src="/images/pages/home-1.png"
        alt="top-nav"
        width={325}
        height={200}
        loading="lazy"
        style={{ margin: "auto" }}
      />
    </div>
  );
}
