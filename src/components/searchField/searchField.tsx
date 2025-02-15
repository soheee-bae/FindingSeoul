"use client";

interface searchFieldProps {
  search?: string;
  setSearch?: (search: string) => void;
}

export default function SearchField(props: searchFieldProps) {
  const { search, setSearch } = props;

  return (
    <input
      type="search"
      placeholder="Search"
      value={search}
      onChange={(e) => {
        setSearch?.(e.target.value);
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
