"use client";
import { homeData, imageUrlConstant } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./courseCard";
import UserReviewCard from "./userReviewCard";
import BlurFadeText from "../magicui/blur-fade-text";

const HomePage = () => {
  const courses = homeData?.courses?.filter((ele) => ele.type === "");
  const carrerRelated = homeData?.courses?.filter(
    (ele) => ele?.type === "carrer-related"
  );
  const recentAddition = homeData?.courses?.filter(
    (ele) => ele?.type === "recent-addition"
  );

  return (
    <>
      <img
        className=" w-full h-full"
        src={imageUrlConstant?.mainBanner}
        loading="lazy"
        alt=""
      />
      <div className="bg-white grid grid-cols-1 sm:grid-cols-3 gap-5  top-10 max-w-[1124px] mx-auto relative md:-top-10 px-4 md:px-4">
        {homeData?.become?.map((ele, index) => (
          <div key={index} className="relative">
            <div
              key={index}
              className="px-3 py-3 flex flex-col items-center gap-4 rounded-lg bg-linear-grad-yellow-10 shadow-md "
            >
              <h1 className="text-base md:text-xl text-pretty font-semibold text-white-10 text-center whitespace-nowrap uppercase ">
                {ele?.title}
              </h1>
            </div>
            <button className="shadow-md transition-all text-sm font-bold hover:scale-110 top-10 bg-indigo-600 text-white-10 p-4 rounded-full flex items-center -mt-3 hover:underline mx-auto">
              Know More
            </button>
          </div>
        ))}
      </div>

      <CourseCard title={"Top Trending Courses"} data={courses} />
      <WhyChooseUs />
      <Banner />
      <BlogPost />
      <CourseCard title={"Carrer Related Courses"} data={carrerRelated} />
      <CourseCard title={"Recent Addition"} data={recentAddition} />
      <UserReview />
      <BottomBanner />
    </>
  );
};

const BottomBanner = () => {
  return (
    <div className="relative w-full h-[230px]">
      <img
        className="absolute w-full h-full"
        src="/business.png"
        alt="business"
      />
      <div className="max-w-[1520px] mx-auto">
        <div className="text-sm  md:text-2xl text-white-10 absolute  top-12  md:px-15 px-5 ">
          {homeData?.bannerMsgTitle}
        </div>
        <div className="text-xs md:text-xl text-white-10 absolute  md:top-20 top-20 md:px-15 px-5  md:block hidden">
          {homeData?.bannerMsgTitle2}
        </div>
        <button className="w-[170px] bg-white-10 hover:bg-indigo-600 hover:scale-110 hover:text-white-10 transition-all inset-0 top-29 mx-auto mt-5 uppercase h-10 rounded-sm text-ft12-18 text-[#0c5397] absolute">
          Learn more
        </button>
      </div>
    </div>
  );
};

const UserReview = () => {
  return (
    <motion.div className="max-w-[1920px] mx-auto my-10 md:px-0 px-3">
      <BlurFadeText
        className="text-gray-600 my-10  px-4 w-full text-center text-2xl font-bold uppercase"
        yOffset={3}
        delay={0.4}
        text={"Reviews"}
      />
      <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {homeData?.reviewUsers?.map((review, index) => (
          <UserReviewCard key={index} review={review} />
        ))}
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        viewport={{ once: true }}
        className="my-9 p-3"
      >
        <p className="text-center text-gray-600 text-2xl font-bold uppercase">
          Why Choose Us
        </p>
        <div className="md:grid-cols-4 grid-cols-2 grid place-items-center text-center">
          {homeData?.whyChooseData?.map((ele, index) => (
            <div className="grid place-items-center mt-3" key={index}>
              <img
                loading="lazy"
                src={ele?.img}
                alt="why-choose"
                className="w-auto"
              ></img>
              <p className="mt-3 text-sm">{ele?.title} </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Banner = () => {
  return (
    <motion.div className="p-5 bg-linear-grad-blue-20 w-full my-10">
      <motion.div className="flex items-center w-full justify-center">
        <motion.p className="uppercase text-white-10 text-sm md:text-lg">
          When you learn better you do better! Study with us, grow with us.
        </motion.p>
        <motion.button
          whileTap={{ scale: "0.8" }}
          className="bg-black-10 h-10 text-white-10 rounded-xl ml-4 w-[150px]"
        >
          Log In
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const BlogPost = () => {
  return (
    <motion.div className="max-w-[1920] mx-auto md:px-0 px-3 my-10">
      <p className="text-gray-600 my-10  px-4 text-center text-2xl font-bold uppercase">
        Latest blog post
      </p>

      <div className="grid  sm:grid-cols-3 gap-7  lg:grid-cols-4 place-items-center md:px-10 px-3">
        {homeData?.blogPost?.map((element, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: "1.06" }}
            className="rounded-xl cursor-pointer bg-white-10  p-4 flex flex-col gap-4 shadow-2xl drop-shadow"
          >
            <motion.span
              className="text-blue-10 text-center text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 2,
              }}
              key={i}
            >
              {element?.title}
            </motion.span>
            <img src={element?.img} alt="blog-post" />
            <div className="text-sm">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type...`}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default HomePage;
