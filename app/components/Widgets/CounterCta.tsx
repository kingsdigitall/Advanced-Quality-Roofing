import React from "react";
import CountUp from "../Countup";
import CouterUpWithK from "../CouterUpWithK";
import ContactInfo from "@/components/Content/ContactInfo.json";
import { IoCallSharp } from "react-icons/io5";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import Image from "next/image";

const CounterCta = () => {
  return (
    <div className="relative  mt-20 text-white">
      <div className=""></div>
      <div className="item-center relative z-20 flex flex-col items-center justify-around bg-black/70 px-4 py-10 md:flex-row md:px-10 md:py-10">
        <div className="relative mx-auto max-w-4xl text-center ">
          {/* <div className="w-fit rounded-full border border-white p-1 px-2 text-sm  font-semibold text-minor">
            NUMBER TALKS
          </div> */}
          <div className="mt-2 text-4xl">
            Get a Free <span className="text-main">Roof</span> Estimate Today!
          </div>
          <div className="mt-2">
            When you need roofing help, don’t settle for delays or
            uncertainty—call Affordable Roofing now for fast, dependable service
            you can count on! Our experienced team is ready to handle any
            roofing issue, big or small, with precision and care.
          </div>
          <div className="mt-4  flex justify-center gap-4 ">
            <div className="flex flex-col rounded-md  border bg-white px-4 py-2 text-lg">
              <div className=" font-bold text-main">
                <a href={`tel:${ContactInfo.tel}`}>{ContactInfo.No}</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mdjustify-center mt-4 grid  grid-cols-2 gap-4 md:mt-0 md:w-[40%]">
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 md:w-60 md:p-0 ">
            <div className="flex flex-col items-center  justify-between gap-4  font-bold md:flex-row ">
              <FaBuildingCircleCheck className="text-6xl text-minor" />
              <CouterUpWithK end={40} />
            </div>
            <div className="mt-2 text-center">Our Project Complete</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 md:w-60 md:p-0 ">
            <div className="flex flex-col items-center  justify-between gap-4  font-bold md:flex-row ">
              <RiTeamFill className="text-6xl text-minor" />
              <CouterUpWithK end={3} />
            </div>
            <div className="mt-2 text-center">Our Tæm Member</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 md:w-60 md:p-0 ">
            <div className="flex flex-col items-center  justify-between gap-4  font-bold md:flex-row ">
              <VscPreview className="text-6xl text-minor" />
              <CouterUpWithK end={11} />
            </div>
            <div className="mt-2 text-center">Clients Reviews</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border p-4 px-4 md:w-60 md:p-0 ">
            <div className="flex flex-col items-center  justify-between gap-4  font-bold md:flex-row ">
              <FaAward className="text-6xl text-minor" />
              <CouterUpWithK end={1} />
            </div>
            <div className="mt-2 text-center">Our Winning Award</div>
          </div>
        </div> */}
      </div>
      <div className="absolute bottom-0 left-0 right-0  top-0 ">
        <Image
          height={1000}
          width={1000}
          className="h-full w-full object-cover object-center "
          src="/maintenance-worker-is-diligently-repairing-leaky-roof-residential-building-showcasing-skill-focus-scene-captures-essence-hard-work-dedication-home-maintenance.jpg"
          alt="counter-cta"
        />
      </div>
    </div>
  );
};

export default CounterCta;
