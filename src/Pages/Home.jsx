import React from "react";
import Header from "./Shared/Header";
import NavBar from "./Shared/NavBar";
import LeftSideNav from "./Shared/LeftSideNav";
import RightSideNav from "./Shared/RightSideNav";
import BreakingNews from "./Shared/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./Shared/NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      <h2 className="text-3xl font-poppins">This is home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-1">
          <LeftSideNav />
        </div>
        <div className="col-span-2">
          {news.map((newsItem) => (
            <NewsCard key={newsItem._id} news={newsItem} />
          ))}
        </div>
        <div className="col-span-1">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
