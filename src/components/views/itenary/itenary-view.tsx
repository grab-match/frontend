"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  destinationPackageDetail,
  destinations,
} from "@/services/api/destinations";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ItenaryPage() {
  const [location] = useState(
    (typeof window !== undefined &&
      localStorage?.getItem("location") &&
      JSON.parse(localStorage?.getItem("location") as any)) ??
      null
  );

  const [selectedTab, setSelectedTab] = useState<string | null>(
    "kota-tua-tour"
  );
  const [selectedDestination, setSelectedDestination] = useState<any>(null);

  const { data, isFetching } = useQuery({
    enabled: selectedTab === "ai" && !!location?.lat && !!location?.lng,
    queryKey: ["desinations", location],
    queryFn: async () =>
      await destinations({
        latitude: location?.lat || "",
        longitude: location?.lng || "",
      }),
  });

  const { data: data1, isFetching: isFetching1 } = useQuery({
    enabled: selectedTab === "kota-tua-tour",
    queryKey: ["desinations", "kota-tua-tour"],
    queryFn: async () => await destinationPackageDetail("kota-tua-tour"),
  });

  const { data: data2, isFetching: isFetching2 } = useQuery({
    enabled: selectedTab === "scbd-tour",
    queryKey: ["desinations", "scbd-tour"],
    queryFn: async () => await destinationPackageDetail("scbd-tour"),
  });

  const isFetchingData =
    selectedTab === "kota-tua-tour"
      ? isFetching1
      : selectedTab === "scbd-tour"
      ? isFetching2
      : isFetching;

  const responseData =
    selectedTab === "kota-tua-tour"
      ? data1
      : selectedTab === "scbd-tour"
      ? data2
      : data;

  useEffect(() => {
    if (responseData?.data) {
      setSelectedDestination(responseData?.data);
    }
  }, [responseData]);

  console.log({ isFetching });

  return (
    <section className="mx-auto max-w-[420px]">
      <div className="flex flex-col h-screen p-4 bg-gray-100">
        <div className="flex items-center justify-between mb-4">
          {isFetchingData ? (
            <Skeleton className="w-[250px] h-[28px]" />
          ) : (
            <h1 className="text-xl font-bold">{selectedDestination?.name}</h1>
          )}
        </div>
        {isFetchingData ? (
          <Skeleton className="w-full h-[40px] mb-4" />
        ) : (
          <div className="text-center bg-gray-200 py-2 rounded  mb-4">
            <span>
              {selectedDestination?.startTime} - {selectedDestination?.endTime}
            </span>
          </div>
        )}

        <div className="flex justify-between mb-4">
          <Image
            alt="Kota Tua"
            src="/images/itenary/kota-tua.png"
            width={96}
            height={96}
            objectFit="cover"
            className="rounded-[8px] hover:cursor-pointer hover:opacity-80"
            onClick={() => setSelectedTab("kota-tua-tour")}
          />

          <Image
            alt="Kota Tua"
            src="/images/itenary/scbd.png"
            width={96}
            height={96}
            objectFit="cover"
            className="rounded-[8px] hover:cursor-pointer hover:opacity-80"
            onClick={() => setSelectedTab("scbd-tour")}
          />

          <div
            className="flex justify-center items-center text-center p-[2px] font-semibold text-teal-900 bg-gray-300 h-24 w-24 rounded  hover:cursor-pointer hover:opacity-80"
            onClick={() => setSelectedTab("ai")}
          >
            AI Generate For You
          </div>
        </div>

        <div className="mb-4">
          {isFetchingData ? (
            <>
              <Skeleton className="w-full h-[80px] mb-2" />
              <Skeleton className="w-full h-[80px] mb-2" />
              <Skeleton className="w-full h-[80px] mb-2" />
            </>
          ) : (
            <>
              {selectedDestination?.itineraries?.map((e: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center bg-white p-4 rounded shadow mb-2"
                >
                  <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-8 8v5a3 3 0 003 3h2a3 3 0 003-3v-5m4 0V7a2 2 0 00-2-2h-3M7 12V7a2 2 0 00-2-2H2m20 0h-3a2 2 0 00-2 2v5m0 0v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m0 0h4"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{e?.status || "-"}</div>
                    <div>{e?.title || "-"}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {isFetchingData ? (
          <Skeleton className="w-full h-[120px] mb-4" />
        ) : (
          <div className="flex-1 mb-4">
            <img
              src="/path/to/your/map/image.png"
              alt="Map"
              className="w-full h-full object-cover rounded"
            />
          </div>
        )}

        <div className="flex flex-col">
          <Button
            disabled={isFetchingData}
            className="bg-green-500 text-white w-full py-2 rounded mb-2"
          >
            Save the Itinerary
          </Button>
          <Button
            disabled={isFetching}
            className="bg-green-500 text-white w-full py-2 rounded"
          >
            Regenerate Itinerary with AI
          </Button>
        </div>
      </div>
    </section>
  );
}
