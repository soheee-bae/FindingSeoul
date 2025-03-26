"use client";

import { BASE_CATEGORIES } from "@/data/categories";
import { useRouter } from "next/navigation";
import styles from "./baseCategories.module.scss";
import Tag from "@/components/tag/tag";

export default function BaseCategories() {
  const router = useRouter();

  const handleCategoryClick = () => {};

  return (
    <div className={styles.container}>
      {BASE_CATEGORIES.map((category) => (
        <Tag
          key={category.id}
          text={category.name}
          onClick={handleCategoryClick}
        />
      ))}
    </div>
  );
}
// const categories = places?.map((place) => place.category).flat();
// const cat = categories?.filter(function (item, pos) {
//   return categories.indexOf(item) == pos;
// });
