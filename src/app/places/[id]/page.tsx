"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Place() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      Places detail!! page {searchParams} / {pathname}
    </div>
  );
}
