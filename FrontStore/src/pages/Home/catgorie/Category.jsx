import React, { useEffect, useState } from "react";
import { getCategory } from "../../../Api/category.api";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCategory = () => {
    getCategory()
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="grid grid-cols-3 gap-2 py-2">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <img
                src={category.image}
                className="w-full object-cover rounded-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none px-5 mt-10"
                alt={category.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
