import Image from "next/image";
import React from "react";

const Offline = () => {
  return (
   <div className="flex flex-row gap-4 w-full py-8">
    <div className="bg-white rounded-lg w-1/3 flex flex-col">
    <div className="flex flex-col">
      <div className="flex flex-col items-end justify-end">
        <div>Cohort 8 Starts on </div>
        <div>26 APR</div>
      </div>
      <div className="flex flex-col">
        <div>Mentorship classes</div> 
        <div>(Basic to advance)</div>
      </div>
      <div className="fleex flex-col justify-end">
        <div>Duration : 1.5 months</div>
        <div>Weekday Batch : Mon & Wed</div>
        <div>Weekend Batch : Sat & Sun</div>
        <div>Online Live Trading Session On Monday & Wednesday</div>
      </div>
    </div>
    <div className="flex flex-row items-center justify-between secondary">
      <div className="flex flex-col">
        <div>Cost</div>
        <div>₹15000</div>
      </div>
      <div className="flex flex-row">
        <div>Enroll now</div>
        <div>arrow</div>
      </div>
    </div>
    </div>
    <div className="bg-white p-4 rounded-lg w-1/3">Mentorship classes + Stock Advisory Services (1 year)</div>
    <div className="bg-white p-4 rounded-lg w-1/3">Mentorship classes + stock Advisory + Options Advisory Services (1 year)</div>
   </div>
  );
};

export default Offline;
