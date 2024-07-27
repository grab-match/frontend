"use client"
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useState } from "react";
export function ShowSwipePage() {
  const [page, setPage] = useState("YourSet")
  return (

    <section className=" mx-auto max-w-[325px] py-3">
      <div className=" flex flex-col overflow-auto gap-2 flex flex-col">
        <div className="flex justify-center items-center gap-2.5">
          <Button onClick={() => setPage("YourSet")} className={page === "YourSet" ? "bg-[#1E938B] text-white hover:text-white" : "bg-[#F7F7F7] text-dark hover:text-white"} >Your Set</Button>
          <Button onClick={() => setPage("PeopleForYou")} className={page === "PeopleForYou" ? "bg-[#1E938B] text-white hover:text-white" : "bg-[#F7F7F7] text-dark hover:text-white"} >People For You</Button>
        </div>
        {
          page === "YourSet" && <div className="flex bg-[#F7F7F7] rounded-xl pr-3 pl-1 py-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#F24E1E" />
            </svg>
            <p >Lorem Ipsum</p>
          </div>
        }
        <p className="font-bold">Lorem Ipsum </p>
        <div className="flex gap-1.5">
          <button className="bg-[#F7F7F7] p-1.5  rounded-2xl">icon</button>
          <button className="bg-[#F7F7F7] p-1.5 rounded-2xl">Terdekat</button>
          <button className="bg-[#F7F7F7] p-1.5 rounded-2xl">Bintang 4.5+</button>
          <button className="bg-[#F7F7F7] p-1.5 rounded-2xl">Kuliner</button>
        </div>
        <div className="flex-grow p-2 py-3 bg-white h-[472px] flex-wrap w-full flex flex-col content-end justify-between text-white" style={{ backgroundImage: "url(https://wallpapers.com/images/hd/jennie-pictures-lwr3h2zhmj9xhpjr.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="flex-col bg-[#1E938B] w-16 h-16 rounded-full self-end border border-4 border-[#39AAA2] flex justify-center items-center">
            <p className="text-white font-bold text-center">80%</p>
            <p className="text-white text-[8px] text-center">Best Fit</p>
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-start items-start">
              <p className="bg-[#39AAA2] rounded-full text-[12px] p-1 mb-1">New here</p>
              <p className="font-bold text-xl">Jennie, 28</p>
            </div>
            <div className="flex justify-between mb-2">
              <div className="bg-[#67AD98] w-[46px] h-[46px] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 0C23.28 0 30 6.72 30 15C30 23.28 23.28 30 15 30C6.72 30 0 23.28 0 15C0 6.72 6.72 0 15 0ZM6 17.955H13.5L10.11 14.565C10.8051 13.7475 11.6694 13.0908 12.6432 12.6402C13.617 12.1895 14.677 11.9558 15.75 11.955C19.305 11.955 22.275 14.445 23.04 17.775L24.48 17.295C23.52 13.365 19.98 10.455 15.75 10.455C13.08 10.455 10.695 11.64 9.045 13.5L6 10.455V17.955Z" fill="white" />
                </svg>
              </div>
              <div className="bg-[#1E938B] p-2 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 28.125C23.2838 28.125 30 22.2487 30 15C30 7.75125 23.2838 1.875 15 1.875C6.71625 1.875 0 7.75125 0 15C0 18.3 1.39313 21.3188 3.69375 23.625C3.51188 25.53 2.91188 27.6187 2.24813 29.1862C2.1 29.535 2.38688 29.925 2.76 29.865C6.99 29.1713 9.50437 28.1063 10.5975 27.5513C12.0333 27.9356 13.5136 28.1285 15 28.125ZM15 11.2369C18.12 8.02875 25.9219 13.6425 15 20.8594C4.07813 13.6406 11.88 8.02875 15 11.2369Z" fill="white" />
              </svg></div>
            </div>
            <div className="bg-white rounded text-black p-1.5">
              <p>What are you looking for?</p>
              <p>singkat saja ayo pacaran</p>
            </div>
          </div>
        </div>
        <div className="p-2 flex gap-2 flex-col">

          <div>
            <div className="">
              <p className="font-bold">About me</p>
              <div className="flex flex-wrap gap-2 text-black">
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">165 cm</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">In Collage</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Women </p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Catholic</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Interest</p>
              </div>
            </div>
            <p className="font-bold">Interests</p>
            <p className="pb-2">Get specific about the you love</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-content-start items-start">
                <p className="font-bold">Favorite interest</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Philosphy</p>
              </div>
              <hr />
              <div className="flex gap-1.5">
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Cafe-hopping</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Comedy</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Rock</p>
                <p className="bg-[#F7F7F7] p-1 rounded-2xl">Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
