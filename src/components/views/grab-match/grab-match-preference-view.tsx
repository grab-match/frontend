import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ROUTE_PATHS } from "../route";

export default function GrabMatchPreferencesPageView() {
  return (
    <div className="mx-auto max-w-[430px] min-h-[100vh] flex flex-col overflow-hidden">
      <div className="flex flex-row">
        <div className="w-full flex flex-col bg-emerald-100 p-[16px] ">
          <div className="flex flex-row items-center gap-[8px]">
            <Link href={ROUTE_PATHS.GRAB_MATCH.ROOT}>
              <Button variant="ghost" className="!w-fit !p-[8px] ml-[12px]">
                <Icon
                  icon="ic:round-arrow-back-ios-new"
                  className="text-teal-600"
                />
              </Button>
            </Link>

            <p className="text-[18px] text-teal-900 font-bold">Set preferred</p>
          </div>

          <div className="max-w-[250px]">
            <p className="text-[12px] text-teal-900 font-semibold ml-[24px] mt-[12px]">
              Atur lokasi sampai kesukaanmu agar lebih mudah dan cepat dalam
              mencari GrabMatch!
            </p>
          </div>
        </div>

        <Image
          alt="illustration"
          src="/images/illustration-primary.svg"
          width={150}
          height={150}
          className="absolute z-10 right-0 top-[30px]"
        />
      </div>

      <div className="mt-[42px] px-[16px]">
        <div className="px-[16px]">
          <p className="text-[24px] text-teal-600 mt-[16px] mb-[8px]">
            Hello <b>Qosim</b>, <br />
            ready to match?
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
    </div>
  );
}
