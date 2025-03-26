"use client";

import { BASE_CATEGORIES } from "@/data/categories";
import { useRouter } from "next/navigation";

export default function BaseCategories() {
  const router = useRouter();

  const handleCategoryClick = () => {};

  return (
    <div>
      {BASE_CATEGORIES.map((category) => (
        <div key={category.id} onClick={handleCategoryClick}>
          {category.name}
        </div>
      ))}
    </div>
  );
}
// const categories = places?.map((place) => place.category).flat();
// const cat = categories?.filter(function (item, pos) {
//   return categories.indexOf(item) == pos;
// });
