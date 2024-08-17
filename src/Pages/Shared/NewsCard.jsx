import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-xl m-4">
      <figure className="h-48 sm:h-60 w-full overflow-hidden">
        <img
          src={thumbnail_url}
          alt={title}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 150 ? (
          <p>
            {details.slice(0, 150)}...
            <Link to={`/news/${_id}`} className="text-blue-500">
              Read More
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
