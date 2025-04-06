"use client";

import { BASE_CATEGORIES } from "@/data/categories";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import styles from "./baseCategories.module.scss";
import Tag from "@/components/tag/tag";
import { DEFAULT_TYPE, DEFAULT_SITESORT } from "@/data/categories";

export default function BaseCategories() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as string) || DEFAULT_TYPE;
  // const siteSort = Number(searchParams.get("siteSort")) || DEFAULT_SITESORT;

  const handleCategoryClick = () => {
    // const url = `${pathname}?${searchParams}`;
    // router.push(pathname, { scroll: false });
  };

  return (
    <div className={styles.container}>
      {BASE_CATEGORIES.map((category) => (
        <Tag
          key={category.id}
          text={category.name}
          onClick={handleCategoryClick}
          selected={type === category.id}
        />
      ))}
    </div>
  );
}
// const categories = places?.map((place) => place.category).flat();
// const cat = categories?.filter(function (item, pos) {
//   return categories.indexOf(item) == pos;
// });
