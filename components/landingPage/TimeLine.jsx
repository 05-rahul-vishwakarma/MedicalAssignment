import React from "react";

const Timeline = () => {
  return (
     <div className="h-[30rem] border-none my-[3rem] " >
        {/* <div className="h-[12rem] border-r-2 border-t-2 border-b-[1px] border-[gray] rounded-r-full  " ></div>
        <div className="h-[12rem] border-l-2 border-t-[1px] border-b-2 border-[gray] rounded-l-full relative  ] " >
            <div className="w-[100px] h-[20px] border-b-2 border-white absolute right-[-17px] top-[-20px]   " > </div>
            <div className="w-[100px] h-[20px] border-b-2 border-white absolute left-[-17px] top-[-20px]   " > </div>

        </div> */}

     </div> 
  );
};

// Custom Tailwind CSS classes
const styles = {
  timelinePoint: "w-6 h-6 bg-blue-500 rounded-full border-2 border-white",
  taskCard: "bg-blue-100 shadow-lg rounded-lg p-4 text-center",
};

export default Timeline;
