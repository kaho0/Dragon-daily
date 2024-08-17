import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaBolt,
  FaGlobe,
  FaFutbol,
  FaFilm,
  FaTheaterMasks,
  FaPalette,
  FaCalendarAlt, // Calendar icon import
} from "react-icons/fa";
import num1 from "../../assets/1.png";
import num2 from "../../assets/2.png";
import num3 from "../../assets/3.png";

// Category icon map
const iconMap = {
  "All News": FaNewspaper,
  "Breaking News": FaBolt,
  "Regular News": FaNewspaper,
  "International News": FaGlobe,
  Sports: FaFutbol,
  Entertainment: FaFilm,
  Culture: FaTheaterMasks,
  Arts: FaPalette,
};

// Bottom cards data
const bottomCards = [
  {
    id: 1,
    title: "Event 1",
    image: num1,
    date: "12th August 2024",
  },
  {
    id: 2,
    title: "Event 2",
    image: num2,
    date: "25th August 2024",
  },
  {
    id: 3,
    title: "Event 3",
    image: num3,
    date: "1st September 2024",
  },
];

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesData = [
      { id: "0", name: "All News" },
      { id: "1", name: "Breaking News" },
      { id: "2", name: "Regular News" },
      { id: "3", name: "International News" },
      { id: "4", name: "Sports" },
      { id: "5", name: "Entertainment" },
      { id: "6", name: "Culture" },
      { id: "7", name: "Arts" },
    ];
    setCategories(categoriesData);
  }, []);

  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Category List */}
      <div>
        <h1 className="text-xl font-semibold mb-3">All Categories</h1>
        {categories.map((category) => {
          const IconComponent = iconMap[category.name]; // Get the corresponding icon component
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex items-center text-md font-medium pl-2 py-1 hover:text-blue-500"
            >
              {/* Icon */}
              {IconComponent && <IconComponent className="mr-2 text-lg" />}
              {/* Category Name */}
              <span>{category.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Cards Section */}
      <div className="mt-4 space-y-3">
        {bottomCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Card Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-32 object-cover"
            />
            {/* Card Title with Date */}
            <div className="p-3">
              <h3 className="text-md font-medium">{card.title}</h3>
              {/* Date with Calendar Icon */}
              <div className="flex items-center mt-1 text-gray-500">
                <FaCalendarAlt className="mr-2 text-lg" />
                <span>{card.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
