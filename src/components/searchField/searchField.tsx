"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { ReactNode, useEffect, useState } from "react";
import styles from "./searchField.module.scss";
import clsx from "clsx";
interface searchFieldProps {
  setSearch: (search: string) => void;
  startIcon?: ReactNode;
}

export default function SearchField(props: searchFieldProps) {
  const { setSearch, startIcon } = props;

  const [input, setInput] = useState<string>();

  const debouncedSearch = useDebounce(input, 300);

  useEffect(() => {
    if (debouncedSearch) {
      setSearch(debouncedSearch);
    } else {
      setSearch("");
    }
  }, [debouncedSearch, setSearch]);

  return (
    <div className={styles.container}>
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      <input
        className={clsx(styles.searchField, {
          [styles.seachFieldWithIcon]: startIcon,
        })}
        type="search"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput?.(e.target.value);
        }}
      />
    </div>
  );
}
