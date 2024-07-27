"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ROUTE_PATHS } from "../route";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const OpenStreetMap = dynamic(() => import("../../shared/Map"), {
  ssr: false,
});
const ImageCapture = dynamic(() => import("../../shared/CameraCaputre"), {
  ssr: false,
});

export default function GrabMatchPreferencesPageView() {
  const [location, setLocation] = useState<any>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleLocationSelect = (latlng: any) => {
    setLocation(latlng);
  };

  const handleCapture = (capturedImage: string) => {
    setImage(capturedImage);
  };

  return (
    <div className="mx-auto max-w-[430px] min-h-[100vh] flex flex-col overflow-hidden">
      <div className="flex flex-row justify-between bg-emerald-100 p-[16px] relative">
        <Link href={ROUTE_PATHS.GRAB_MATCH.ROOT}>
          <Button variant="ghost" className="!w-fit !p-[8px] ml-[12px]">
            <Icon
              icon="ic:round-arrow-back-ios-new"
              className="text-teal-900"
            />
          </Button>
        </Link>

        <div className="flex flex-col justify-center">
          <p className="text-[18px] text-teal-900 font-bold text-center">
            Set preferred
          </p>
          <p className="text-[14px] text-teal-900 font-semibold text-center">
            Atur lokasi sampai kesukaanmu agar lebih mudah dan cepat dalam
            mencari GrabMatch!
          </p>
        </div>

        <Image
          alt="illustration"
          src="/images/illustration-primary.svg"
          width={130}
          height={130}
          className="absolute top-[30px] right-[16px] z-10"
        />
      </div>

      <div className="mt-[24px] px-[32px]">
        <h1 className="text-2xl text-teal-600 font-semibold my-[24px]">
          Hello <b>Qosim</b>, <br />
          ready to match?
        </h1>

        <div className="mb-4">
          <h2 className="text-xl font-bold text-teal-900 mb-2">
            What are you looking for?
          </h2>
          <div className="flex items-center bg-green-500 text-white p-2 rounded mb-4">
            <Icon
              icon="fluent:calendar-sync-20-regular"
              className="h-6 w-6 mr-2"
            />
            <span>Jadwalin GoCar</span>
          </div>
        </div>

        {/* Pickup Point */}
        <div className="mb-[24px]">
          <h2 className="text-xl font-bold text-teal-900 mb-2">Pickup Point</h2>
          <OpenStreetMap onLocationSelect={handleLocationSelect} />
        </div>

        {/* Image Capture */}
        <div className="mb-[24px]">
          <h2 className="text-xl font-bold text-teal-900 mb-2">Recent Face</h2>
          <ImageCapture onCapture={handleCapture} />
          {image && (
            <div>
              <img src={image} alt="Captured" className="w-full h-auto mt-2" />
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="mb-[24px]">
          <h2 className="text-xl font-bold text-teal-900 mb-2">
            Looks like you need to save your personal info first
          </h2>
          <p>This help your match candidate know you better</p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Profile strength</span>
              <span>80% complete</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">165 cm</span>
              <span className="mr-2">In college</span>
              <span className="mr-2">Woman</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">Virgo</span>
              <span className="mr-2">Muslim</span>
              <button className="bg-gray-200 p-2 rounded">Add Filter</button>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-[24px]">
          <h2 className="text-xl font-bold text-teal-900 mb-2">Interests</h2>
          <p>Get specific about the things you love.</p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center mb-4">
              <span>Favorite interest</span>
              <button className="bg-gray-200 p-2 rounded">Edit</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 p-2 rounded">Philosophy</span>
              <span className="bg-gray-200 p-2 rounded">Cafe-hopping</span>
              <span className="bg-gray-200 p-2 rounded">Comedy</span>
              <span className="bg-gray-200 p-2 rounded">Rock</span>
              <span className="bg-gray-200 p-2 rounded">Coffee</span>
            </div>
          </div>
        </div>

        {/* Save & Matchmaking */}
        <div className="flex justify-between">
          <Button className="bg-green-500 text-white w-full py-2 rounded mb-2">
            Save & Matchmaking
          </Button>
        </div>
      </div>
    </div>
  );
}
