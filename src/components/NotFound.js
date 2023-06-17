import React, { useEffect } from "react";
import { Link } from "react-router-dom/dist";

const NotFound = (props) => {
  const { loadingBarRef } = props;

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.complete();
    }
  }, [loadingBarRef]);

  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center pb-16">
      <h2 className="text-5xl">OOPS!</h2>
      <h2 className="text-3xl font-bold my-6">Page Not Available</h2>
      <Link
        to="/"
        className="cursor-pointer text-sm font-semibold bg-gray-600 text-white py-3 px-5 rounded-full hover:bg-[dodgerBlue] active:bg-orange-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
