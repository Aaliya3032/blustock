import React from "react";
import bg from '../assets/trading_bg1.webp'

const Batch = () => {
  return (
    <div
      className="w-full bg-gray-50 relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="w-[85%] mx-auto py-12 relative z-10">
        <div
          className="sm:text-3xl text-2xl font-bold mb-4 text-white"
          data-aos="fade-right"
        >
          Choose Your Batch :
        </div>
        <p className="text-white">   BluStock Consultants Community is a place for traders and investors to
        connect, share insights, and discuss market trends. Members get access
        to expert trading plans, market analysis, and diverse strategies from
        professionals and fellow traders. The community also trades live
        together, making learning more interactive and practical. Engage, learn,
        and improve your skills with regular updates and discussions. Whether
        you&apos;re a beginner or experienced, this community helps you stay informed
        and make better trading decisions!</p>
        <p className="text-white">   BluStock Consultants Community is a place for traders and investors to
        connect, share insights, and discuss market trends. Members get access
        to expert trading plans, market analysis, and diverse strategies from
        professionals and fellow traders. The community also trades live
        together, making learning more interactive and practical. Engage, learn,
        and improve your skills with regular updates and discussions. Whether
        you&apos;re a beginner or experienced, this community helps you stay informed
        and make better trading decisions!</p>
      </div>
    </div>
  );
};

export default Batch;
