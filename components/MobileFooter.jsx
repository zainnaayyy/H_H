import React from "react";
import { Button } from "@/components/ui/button"; // Adjust import based on your UI library
import Link from "next/link";

const ResponsiveFooter = ({ children }) => {
  return (
    <>
      {/* Regular footer for large screens */}
      <div className="hidden md:block">{children}</div>

      {/* Fixed quote button for mobile screens */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white shadow-lg p-4">
        <Button className="w-full bg-red-600 p-6">
          <Link href="/quote">Get a Quote</Link>
        </Button>
      </div>
    </>
  );
};

export default ResponsiveFooter;
