import Image from "next/image";
import React from "react";
import Hero1 from '../assets/Hero_bg.jpg'
import longterm2 from "../assets/longterm2.png";
import Hero2 from "../assets/Hero2.jpg";
import Hero4 from '../assets/Hero4.jpg'

const Syllabus = () => {
  return (
    <div className="py-2 flex flex-col gap-8 ">
      <div className="font-bold text-xl">Stock Trading Course Outline</div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col gap-4 w-1/2 shadow-[8px_8px_16px_-6px_rgba(0,0,0,0.4)]">
          <div className="text-lg font-medium">
            Module 1: Introduction To Financial Markets
          </div>
          <ul className="text-[#406191] list-disc ml-8 mb-4">
            <li>Introduction to Capital Market</li>
            <li>Understanding different assets classes</li>
            <li>Technical Analysis vs Fundamental Analysis</li>
            <li>Trading vs Investing</li>
            <li>Types of positions - Long vs Short</li>
            <li>Trading Styles</li>
            <li>Getting started with a demat account</li>
            <li>Japanese Candlesticks</li>
          </ul>
        </div>
        <div className="w-1/2"  data-aos="zoom-in">
          <Image src={Hero2} alt="md1" className="w-[70%] ml-auto" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2" data-aos="zoom-in">
          <Image src={Hero1} alt="md1" className="w-[70%] mr-auto" />
        </div>
        <div className="flex flex-col gap-4 w-1/2 shadow-[8px_8px_16px_-6px_rgba(0,0,0,0.4)]">
          <div className="text-lg font-medium">
            Module 2: Understanding Price Action & Chart Analysis
          </div>
          <ul className="text-[#406191] list-disc ml-8 mb-4">
            <li>Types of Market Structure</li>
            <li>Concept of Supply & Demand</li>
            <li>Concept of Support & Resistance</li>
            <li>Identifying Patterns : Classical Chart Patterns</li>
            <li>Important Price Action</li>
            <li>Volume & Open Interest</li>
            <li>Concept of Gaps & Gap Theory</li>
            <li>Reversal Trade Plans</li>
            <li>Importance of Multiple Time Frames</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col gap-4 w-1/2 shadow-[8px_8px_16px_-6px_rgba(0,0,0,0.4)]">
          <div className="text-lg font-medium">
            Module 3: Trading Setups Equity Markets
          </div>
          <ul className="text-[#406191] list-disc ml-8 mb-4">
            <li>Trading Breakouts</li>
            <li>Risk - Reward Calculations</li>
            <li>Stock Selection For Trading</li>
            <li>Identifying Momentum</li>
            <li>Position Sizing for Intraday & Swing</li>
            <li>Order Types for Intraday & Swing</li>
            <li>Trading Journal and Reviewing</li>
          </ul>
        </div>
        <div className="w-1/2" data-aos="zoom-in">
          <Image src={Hero4} alt="md1" className="w-[70%] ml-auto" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2" data-aos="zoom-in">
          <Image src={longterm2} alt="md1" className="w-[70%] mr-auto" />
        </div>
        <div className="flex flex-col gap-4 w-1/2 shadow-[8px_8px_16px_-6px_rgba(0,0,0,0.4)]">
          <div className="text-lg font-medium">
            Module 4: Fundamental Analysis & Long-Term Investing
          </div>
          <ul className="text-[#406191] list-disc ml-8 mb-4">
            <li>Fundamental Analysi</li>
            <li>Power of SIPs</li>
            <li>Index Funds & Mutual Funds</li>
            <li>IPOs & FPOs</li>
            <li>Financial, Retirement & Insurance Planning</li>
            <li>SIP Goal Calculator</li>
            <li>Short Term Goal Achiever Plan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
