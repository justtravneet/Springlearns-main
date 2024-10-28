import { SlideInFromRight } from "@/components/animation";
import { AlarmClockPlus } from "lucide-react";
import React, { useState } from "react";

const AdvisorForm = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <SlideInFromRight delay={1.4} >
      <div className="  p-6 flex-1 max-w-[300px] bg-white-10 border border-gray-200 rounded-xl shadow-md">
        <div className=" ">
          <div className="flex justify-end">
            <button
              onClick={() => setIsVisible(false)}
              className=" right-2  md:hidden" 
            >
              <p className="text-gray-500">X</p>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <AlarmClockPlus className="text-black-30" />
            <p className="text-sm font-medium text-gray-500">
              Next Cohort starts in{" "}
              <span className="text-green-600 font-semibold">2 days</span>
            </p>
          </div>

        </div>

        <form className="mt-4 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex">
            <div className="flex items-center border border-gray-300 rounded-l-md bg-gray-100">
              <select className="bg-transparent px-2 py-2 text-sm text-gray-700 focus:outline-none">
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                {/* Add more country codes as needed */}
              </select>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border-t border-r border-b border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            By Signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>{" "}
            and our{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy and Policy
            </a>
          </p>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white-10 rounded-md font-semibold hover:bg-blue-600"
          >
            Talk to our advisor
          </button>
        </form>
      </div>
      <div className=" p-6 mt-4 flex-1 max-w-[300px] bg-white-10 border border-gray-200 rounded-xl shadow-md">
        <div className="flex items-center w-full">
          <p>Struggling to Find the Perfect Schedule?</p>
          <img
            src="https://d14b9ctw0m6fid.cloudfront.net/confused%201-f59de2204ca243e6850042985ae1166b.svg"
            alt=""
          />
        </div>
        <button className="font-bold mt-3 text-base text-white-10 transition duration-300 ease-in-out bg-black-40 hover:bg-blue-10 rounded  px-6 justify-center w-full py-0 flex items-center h-11 min-w-32">
          View all Schedules
        </button>
      </div>
    </SlideInFromRight>
  );
};

export default AdvisorForm;
