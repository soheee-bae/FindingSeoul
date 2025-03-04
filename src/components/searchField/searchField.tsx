"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
interface searchFieldProps {
  setSearch: (search: string) => void;
}

export default function SearchField(props: searchFieldProps) {
  const { setSearch } = props;

  const [input, setInput] = useState<string>();

  const debouncedSearch = useDebounce(input, 300);

  useEffect(() => {
    if (debouncedSearch) setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  return (
    <input
      type="search"
      placeholder="Search"
      value={input}
      onChange={(e) => {
        setInput?.(e.target.value);
      }}
    />
  );
}
// const SearchFilter = () => {
//   const [search, setSearch] = useState<string>();
//   const debouncedSearch = useDebounce(search, 300);
//   const [filterInfo, setFilterInfo] = useAdminProductsFilterInfo();
//   useEffect(() => {
//     if (filterInfo.search !== debouncedSearch) {
//       setFilterInfo({
//         ...filterInfo,
//         search: debouncedSearch?.trim() ?? "",
//         page: 0,
//       });
//     }
//   }, [debouncedSearch, setFilterInfo, filterInfo]);
//   return (
//     <InputField
//       type="search"
//       placeholder="Search Products"
//       value={search}
//       onChange={(e) => {
//         setSearch(e.target.value);
//       }}
//       className={styles.inputField}
//     />
//   );
// };
