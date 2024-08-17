import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">All Categories</h1>
      {categories.map((category) => (
        <Link
          className="block text-lg font-medium pl-4 py-2 hover:text-blue-500"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
