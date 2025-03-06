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
