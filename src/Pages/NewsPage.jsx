import React from "react";
import Header from "./Shared/Header";
import RightSideNav from "./Shared/RightSideNav";
import NewsDetails from "./NewsDetails";

const NewsPage = () => {
  return (
    <div>
      <Header /> {/* Header at the top */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="lg:w-3/4 p-4">
          <NewsDetails /> {/* NewsDetails on the left */}
        </div>
        <div className="lg:w-1/4 p-4">
          <RightSideNav /> {/* RightSideNav on the right */}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
