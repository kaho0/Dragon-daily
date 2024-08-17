import React from "react";
import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const news = useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">{news.title}</h1>
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            By {news.author.name} on {news.author.published_date}
          </p>
        </div>
        <p>{news.details}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
