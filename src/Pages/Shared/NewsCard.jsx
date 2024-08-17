import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, rating, total_view, author } = news;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
      </>
    );
  };

  return (
    <div className="card bg-base-100 shadow-xl m-4">
      <figure className="h-48 sm:h-60 w-full overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center mb-4">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-sm font-semibold">{author?.name}</h3>
            <p className="text-xs text-gray-500">{author?.published_date}</p>
          </div>
        </div>
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
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            {renderStars(rating?.number)}
            <span className="ml-2">({rating?.number})</span>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
