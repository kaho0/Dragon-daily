import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ newsData }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {newsData.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
