import React from 'react';
const GetQuoteRibbon = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative bg-blue-800 text-white px-6 py-2 shadow-lg rounded-l-lg">
        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-red-600"></div> */}
        <a href="/quote" className="font-bold text-lg">
          Get a Free Quote
        </a>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-red-600"></div>
      </div>
    </div>
  );
};
export default GetQuoteRibbon;