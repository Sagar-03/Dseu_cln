import React from "react";
import img1 from "../../assets/clg1.jpeg";
import img2 from "../../assets/clg2.jpeg";
import img3 from "../../assets/clg3.jpeg";
import img4 from "../../assets/clg4.jpeg";
import img5 from "../../assets/clg5.jpeg";
import img6 from "../../assets/clg6.jpeg";
const East = () => {
  return (
    <div>
      <h1 className="underline text-xl font-bold text-center p-10">
        East Campus
      </h1>
      <p className="bg-[#005CB940] p-5 m-10 text-lg">
        East Campus hosts the three founding colleges of the university which
        constituted the University of Delhi when it was founded. East campus
        proper now has 13 colleges geographically
      </p>

      <div className="text-center m-5">
        <span className="bg-[#FFB733] px-3 py-1 w-16 text-lg">
          List of Colleges
        </span>
      </div>
      <div className="grid grid-cols-3 w-full items-center justify-items-center gap-10 my-10">
              <div className="bg-[#D9D9D9] w-80 h-72"><img src={img1} className="h-full"/></div>
              <div className="bg-[#D9D9D9] w-80 h-72"><img src={img2} className="h-full" /></div>
              <div className="bg-[#D9D9D9] w-80 h-72"><img src={img3} className="h-full" /></div>
              <div className="bg-[#D9D9D9] w-80 h-72"><img src={img4} className="h-full" /></div>
              <div className="bg-[#D9D9D9] w-80 h-72"><img src={img5} className="h-full" /></div>
              <div className="bg-[#D9D9D9] w-80 h-72"><img src={img6} className="h-full" /></div>
            </div>
    </div>
  );
};

export default East;
