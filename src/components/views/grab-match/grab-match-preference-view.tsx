import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ROUTE_PATHS } from "../route";

export default function GrabMatchPreferencesPageView() {
  return (
    <div className="mx-auto max-w-[430px] min-h-[100vh] flex flex-col overflow-hidden">
      <div className="flex flex-row justify-end">
        <div className="w-full flex flex-col bg-emerald-100 p-[16px]">
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

          <div className="max-w-[200px] ml-[16px] mt-[8px]">
            <p className="text-[12px] text-teal-900 font-semibold">
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
          className="absolute z-10 top-[30px] mr-[16px]"
        />
      </div>

      <div className="mt-[42px] px-[32px]">
        <p className="text-[24px] text-teal-600 mt-[16px] mb-[32px]">
          Hello <b>Qosim</b>, <br />
          ready to match?
        </p>

        <p className="text-[24px] text-teal-600">What are you looking for?</p>
      </div>
    </div>
  );
}
