import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ROUTE_PATHS } from "../route";

export default function GrabMatchPageView() {
  return (
    <div className="mx-auto w-[430px] min-h-[100vh] flex flex-col justify-center p-[16px] overflow-hidden">
      <Link href={ROUTE_PATHS.ROOT}>
        <Button variant="outline" className="!w-fit">
          <Icon icon="ic:round-arrow-back-ios-new" />
        </Button>
      </Link>

      <Image
        alt="illustration"
        src="/images/illustration-primary.svg"
        width={300}
        height={300}
        className="mx-auto"
      />

      <div className="px-[16px]">
        <p className="text-[18px] text-teal-600 font-bold mt-[16px] mb-[8px]">
          Find your match, visit your destination
        </p>
        <p className="text-[12px] text-teal-900">
          Atur jalan-jalan & makan bareng mu bersama orang baru bersama Grab.
          Fitur dilengkapi oleh AI!
        </p>
        <p className="text-[14px] text-teal-500 font-bold mt-[16px] mb-[8px] cursor-pointer">
          Find out more
        </p>
      </div>

      <div className="flex flex-col gap-[8px] px-[16px] mt-[32px] hover:opacity-80 transition-all duration-300 cursor-pointer">
        <p className="text-[18px] text-teal-600 font-bold">
          Set your preference first
        </p>
        <div className="w-full bg-teal-900 p-[8px] rounded-[10px]">
          <Image
            alt="illustration-2"
            src="/images/illustration-secondary.svg"
            width={100}
            height={80}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px] px-[24px] mt-[16px] mb-[32px]  hover:opacity-80 transition-all duration-300 cursor-pointer">
        <p className="text-[18px] text-right text-teal-600 font-bold">
          Find the best match
        </p>
        <div className="w-full bg-emerald-400 p-[8px] rounded-[10px] flex justify-end">
          <Image
            alt="illustration-2"
            src="/images/illustration-secondary.svg"
            width={100}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
