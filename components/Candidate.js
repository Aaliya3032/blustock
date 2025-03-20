import React from "react";

const Candidate = () => {
  return (
    <div className="py-2 flex flex-col gap-8 ">
      <div className="font-bold text-xl"  data-aos="fade-right">
        Who should attend this Stock Trading Course?
      </div>
      <p className="font-medium" data-aos="fade-down">
        The Stock Trading Course is tailored to benefit a broad range of
        individuals who are interested in the stock market, from novices to
        experienced traders. This course can be beneficial for a wide range of
        professionals, including:
      </p>
      <ul className="text-[#406191] list-disc ml-8 mb-4">
        <li>
          Long term investors can learn how to build and grow their investment
          portfolio.
        </li>
        <li>
          {" "}
          Homemakers can learn how to manage and invest family finances
          effectively.
        </li>
        <li>
          Traders can improve their trading skills with expert strategies for
          intraday and swing trading
        </li>
        <li>
          Students can gain essential financial knowledge and skills to start
          their investment journey early
        </li>
        <li>
          Brokerage firms can equip their team with advanced insights to better
          serve their clients.
        </li>
      </ul>
    </div>
  );
};

export default Candidate;
