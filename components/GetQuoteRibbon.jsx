import Image from 'next/image';
import React from 'react';

const GetQuoteRibbon = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <a href="/quote">
        <Image src="/images/quoteOriginal.png" width={150} height={200} alt="Get a Quote" />
      </a>
    </div>
  );
};

export default GetQuoteRibbon;
